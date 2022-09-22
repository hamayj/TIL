var express = require("express");
var app = express();
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
// app 객체 setting이 끝난 후에 app을 넘겨 router 작업을 해주기.
app.use(cookieParser());
// express에서 cookieParser 모듈을 사용함으로 쿠키를 분석하게 됨.
app.use(session({
    secret : "abcdefg", // 암호화를 하게 만듦(뭔솔이지..)
    resave : false, // 세션정보를 재저장할거냐
    saveUninitialized : true // 초기화한 값을 저장하지 않을거냐
}));

var router = require("./router/controller")(app);
var server = app.listen(2000, function(){
    console.log("서버가 가동중입니다.");
});
