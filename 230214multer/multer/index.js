const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const path = require("path");
//^ multer: 파일 업로드 미들웨어
const multer = require("multer");

const upload = multer({
    //^ dest: (destination) 어떤 경로에 파일이 저장될 지 경로 설정
    // dest: "uploads/",
    //^ storage: 경로 뿐만 아니라, 파일명 등을 직접 지정, 제어하고 싶을 때
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, 'uploads/');
        },
        filename(req, file, cb) {
            // const ext = path.extname(file.originalname); // 확장자만 가져오기
            // cb(null, req.body.id + ext );

            const name = file.originalname;
            cb( null, name);

            // done(null, path.basename(file.originalname, ext) + Date.now() + ext );
        },
    }),
    limits: { fileSize: 5*1024*1024 },
});

app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );


//? test, test2라는 미들웨어를 거쳐서 function 실행
app.get("/", test, test2, function(req, res) {
    res.render("ex36");
});


//^ 파일업로드, 업로드객체의 single함수는 한개의 파일의 업로드만 도와준다.
//* ex36
app.post("/upload", upload.single('userfile'), function(req, res) {
    console.log( "req.body : ", req.body );
    console.log( "req.file : ", req.file );
    res.render("ex36_success", {filename: req.file.filename});
});


//^ 파일업로드, 업로드객체의 array함수는 여러개의 파일의 업로드를 도와준다.
app.post("/upload/array", upload.array('userfile'), function(req, res) {
    // req.body: post방식으로 넘어오는 파라미터를 담고있다.
    //           http의 body부분에 담겨져 있는데, 이부분을 파싱하기 위해 body-parser와 같은 패키지가 필요
    console.log( req.body );
    console.log( req.files );
    res.send("Upload Array");
});

//^ 파일업로드
app.post("/upload/fields", upload.fields([{name: 'userfile'}, {name:'userfile2'}, {name: 'userfile3'}]), function(req, res) {
    console.log( req.body );
    console.log( req.files );
    res.send("Upload Fields");
});


//? 미들웨어로 먼저실행
function test(req, res, next) {
    console.log( "test 함수" );
    console.log( req.path );
    next();
}

//? next()로 다음 미들웨어로 실행
function test2(req, res, next) {
    console.log( "test2 함수" );
    next();
}

app.listen(port, () => {
    console.log( "Server Port: ", port);
}) 