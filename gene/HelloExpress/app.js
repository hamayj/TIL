var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const testRouter = require('./routes/test');

const models = require('./models/index');


/*
이미 만들어진 테이블에 Model을 매핑할 수 있을 뿐만 아니라, DB에 테이블이 없는 상태라면 정의한 Model을 바탕으로 테이블을 생성할 수도 있습니다.
이를 수행하는 메서드가 sync() 이며, sync()는 모델에서 정의한 이름을 갖는 테이블이 존재하지 않을 경우에만 동작합니다.
 */
models.sequelize.sync().then(() => {
  console.log("db연결 성공");
}).catch( err => {
  console.log(" 연결 실패. err :", err);
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);

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
