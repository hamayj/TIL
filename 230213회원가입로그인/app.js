var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const fileUploadRouter = require('./routes/upload');

var app = express();

const models = require('./models/index.js');


models.sequelize.sync().then(() => {
  console.log("DB 연결 성공!");
}).catch(err => {
  console.log("연결 실패!  err: ", err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // 요청 객체 req에 cookies 속성이 추가되고, 응답 객체 res에서 cookie() 메서드를 호출할 수 있음.

// 해당 session 코드는 app.js의 적당한 상단에 위치해서 에러없이 동작됨.
app.use(session({
  key: 'sid', // 세션 키 값
  secret: 'secret', // 세션의 비밀키, 쿠키 값의 변조를 막기 위해 이 값을 통해 세션을 암호화하여 저장.
  resave: false, // 세션을 항상 저장할지 여부. (false를 권장)
  saveUninitialized: true, // 세션이 저장되기 전에 uninitialize 상태로 만들어 저장.
  cookie: { // 쿠키 설정
    maxAge: 24000 * 60 * 60 // 쿠키 유효시간 24시간
  }
}));

// app.use('/uploads', express.static('upload'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/upload', fileUploadRouter);
app.use('/upload', express.static('upload')); // 폴더 이름이 upload가 돼야하는 것 아닌가? 어 맞네
// 경로 이상하면 사진이 안뜹니다 ^^,,,

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
