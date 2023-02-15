const express = require('express');
const multer = require('multer');
const router = express.Router();
const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();
// express와 데이터베이스를 연결하는 부분
const fs = require('fs');

const path = require('path');


const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/img/');
        },
        filename(req, file, done){
            // console.log("req : ", req);
            // console.log("req.body: ", req.body);
            console.log("file: ", file);
            // console.log("req.file : ", req.file); req.file은 없음. 그냥 file로 접근하시길ㅎ
            const ext = path.extname(file.originalname);
            // Buffer로 처리해서 한글 이름 나오게 해줬음
            const name = Buffer.from(file.originalname, 'latin1').toString('utf8');
            console.log(name); // 파일 이름이 잘 들어가는 것 확인됨.
            done(null, `${name}`);
        },
    }),
    limits: { fileSize : 5 * 1024 * 1024 }, // 5MB
});



router.get('/list', function(req, res, next){
    res.redirect('/board/list/1');
});


// uri를 /list/:page 형태로 받음. board/list/(페이지숫자) 형식으로 게시판 리스트를 노출하는 방식
router.get('/list/:page', function(req, res, next) {
    const page = req.params.page; // uri 변수 ':page'로 맵핑된 page값을 req 객체로 가져옵니다.
    const sql = "select idx, name, title, hit, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " + "date_format(regdate, '%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql, function(err, rows) { 
        if(err) console.error("err : ", err);
        res.render('list', {title: '게시판 리스트', rows: rows});
    }); // sql문 수행
});

router.get('/write', function(req, res, next) {
    res.render('write', {title: "게시판 글쓰기"});
});

// post로 입력받아 데이터를 DB에 입력
router.post('/write', upload.single("image"), async function(req, res, next){
    // 데이터를 보기 쉽게 하기 위해 req 객체로 body 속성에서 input name 파라미터를 가져올 수 있음.
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    const passwd = req.body.passwd;
    const image = `/img/${req.file.filename}`; // image 경로 만들기
    // data.변수로 해당 sql문에 컬럼이름으로 가져온다. 모든 데이터를 배열로 묶음.
    const datas = [name, title, content, passwd];

    // insert 쿼리문을 작성함. '?' 매개변수로 배열에 있는 데이터와 순서대로 맵핑되어 입력됨.
    const sql = "insert into board(name, title, content, regdate, modidate, passwd, hit) values(?, ?, ?, now(), now(), ?, 0)";
    // query 함수로 sql을 실행하고 datas에 변수내용을 매개변수로 맵핑하여 데이터가 입력됨.
    conn.query(sql, datas, function(err, rows){
        if(err) {
            console.error("err: ", err);
        } else {
            console.log(" rows : " , JSON.stringify(rows));
        }
        res.redirect("/board/list"); // 오류 없이 입력될시 list 페이지로 이동함.
    });
});


router.get("/read/:idx/", function(req, res, next){ // read라는 uri 뒤에 idx 게시글의 고유번호를 받음.
    const idx = req.params.idx;
    // 매개변수에 idx를 전달.
    const sql = "select idx, name, title, content, hit, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " + "date_format(regdate, '%Y-%m-%d %H:%i:%s') regdate from board where idx=?";
    conn.query(sql, [idx], function(err, row) {
        if(err) console.error(err);
        // row[0]에 데이터를 렌더링 함. 한개의 데이터만 가져오도록 첫번째 행만 요청.
        // 상세보기는 하나의 글을 확인하기 때문에 한개에 행만 가져오지만 필요에 따라 여러행을 다루기도 함.
        res.render('read', {title: '글 상세', row:row[0]});
    });
});

// 글 수정하기
router.post('/update', function(req, res, next){
    const idx = req.body.idx;
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    const passwd = req.body.passwd;
    const data = [name, title, content, idx, passwd]; // 변수로 들어온 데이터를 배열로 합침.
    
    console.log(req.body);
    // update 쿼리를 작성함. 글 고유번호와 비밀번호를 조건절로 걸었음.
    // 조건문과 상관없이 sql문이 안먹는데... 안먹었던 이유... -> ejs에서 idx value가 넘어오지 않았음.
    const sql = "update board set name=?,  title=?, content=?, modidate=now() where idx=? and passwd=?";
    conn.query(sql, data, function(err, result){
        if(err) console.error(err);
        // affectedRows : 해당 쿼리로 변경된 수에 행을 불러옴. 0이면 업데이트가 되지 않았으므로 비밀번호가 틀린 것.
        if(result.affectedRows == 0){
            // "" 안에 ""로 처리해버리면 구문을 읽지 못하는 경우가 생기게 되니 조심.
            // 패스워드가 틀렸다면 send로 이전 페이지로 다시 보냄.
            res.send("<script>alert('패스워드가 일치하지 않습니다');history.back();</script>");
        } else {
            // 수정 성공 후에 list페이지로 보내버림.
            res.send("<script>alert('수정되었습니다.');location.href='/board/list';</script>");
            // res.redirect('/board/read/' + idx);
        }        
    });
});

// 글 삭제
router.post('/delete', function(req, res, next){
    const idx = req.body.idx;
    const passwd = req.body.passwd;
    const datas = [idx, passwd];
    
    const sql = "delete from board where idx=? and passwd=?";
    conn.query(sql, datas, function(err, result){
        if(err) console.log(err);
        if(result.affectedRows == 0) {
            res.send("<script>alert('패스워드가 일치하지 않습니다');history.back();</script>")
        } else {
            res.send("<script>alert('삭제되었습니다.');location.href='/board/list';</script>");
        }
    });
});

// 페이징
// page라는 URI 접속 경로를 추가함. 이 페이지는 기존 리스트에 페이징이 추가된 기능
router.get('/page/:page', function(req, res, next) {
    const page = req.params.page; // 현재 페이지의 숫자를 req 객체를 통해 가져옴.
    // 기존 sql에는 content가 없길래 임의로 추가시킨 부분 check
    const sql = "select idx, name, title, content, hit, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " + "date_format(regdate, '%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql, function(err, rows) {
        if(err) console.error("err :", err);
        // rows: 데이터베이스 쿼리에 변수를 렌더링 함. page: 현재 페이지 변수를 렌더링. 
        // length: 데이터의 전체 길이를 렌더링. -1을 한 이유는 DB의 행에 전체는 1부터 시작이지만 for문은 0부터 시작하려고 -1을 했음
        // page_num: 한 페이지에 보여줄 행의 갯수
        res.render('page', {title:'게시판 리스트', rows:rows, page:page, length:rows.length-1, page_num:10, pass:true });
        console.log(rows.length-1);
    });
});

module.exports = router;