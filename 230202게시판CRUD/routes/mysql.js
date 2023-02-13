const express= require('express');
const router = express.Router();
// const mysql = require("mysql"); // mysql 인스턴스를 가져와 사용하기 위한 준비

// router.get('/', function(req,res,next){
//     const connection = mysql.createConnection({
//         // createConnection 함수로 설치된 db의 접속 정보
//         host: 'localhost',
//         user: 'user',
//         password: '1234',
//         database: 'sesac',
//         port: 3306
//     });

//     // connect함수는 해당 커넥션 정보를 이용해 해당 데이터 베이스에 접속을 시도함.
//     connection.connect(function(err){
//         if(err) {
//             res.render('mysql', { connect : '연결 실패', err:err});
//             console.error(err);
//             throw err;
//         } else {
//             res.render('mysql', {connect : '연결 성공', err: '없음'});
//         }
//     });
//     connection.end();
// });

const mysql_odbc = require('../db/db_conn')();
const conn = mysql_odbc.init();

router.get('/', function(req, res, next){
    res.render('mysql', {connect : '연결 성공', err: '없음'});
});

module.exports = router;