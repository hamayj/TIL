// 익스프레스 설정 파일이 있는 코드. 주요 설정을 확인하고 수정 가능함.
// routes에 파일이 추가되면 여기에도 코드 추가가 꼭 필요함.

const express = require("express");
const app = express();

const port = 8000;
const bodyParser = require("body-parser"); 



app.set("view engine", "ejs");
app.use( express.static( "uploads" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );


// app.use에 해당 라우터가 맵핑될 URI를 추가해줌.
// router명을 그대로 맵핑 URI를 입력함.



const createError = require('http-errors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');

// const indexRouter = require('./routes/index');
// const usersRouter = require('/routes/users');
const formRouter = require('./routes/form');
const mysqlRouter = require('./routes/mysql');
const boardRouter = require('./routes/board');

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/form', formRouter); // 데이터 흐름 보여주려고 넣음.
app.use('/mysql', mysqlRouter);
app.use('/board', boardRouter);


app.listen(port, () => {
    console.log( "Server Port: ", port);
});

