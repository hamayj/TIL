var express = require('express');
var router = express.Router();
const models = require('../models');
const crypto = require('crypto');

router.get('/sign_up', function(req, res, next) {
  res.render('user/signup');
});

router.post('/sign_up', function(req, res, next){
  let body = req.body;

  let inputPassword = body.password;
  /**
   * salt 값은 현재 시간에 랜덤 값을 곱해서 생성된 문자열로 생성했음
   * 이 값은 users 테이블의 salt 컬럼에 저장됨.
   */
  let salt = Math.round((new Date().valueOf() * Math.random())) + ""; 
  /**
   * crypto 모듈을 사용해 해시된 비밀번호 hashPassword가 생성되는 과정은 다음과 같음.
   * 1. crypto 모듈 객체의 createhash() 메서드의 인자로 해시 알고리즘을 넘겨줌.
   *  사용할 수 있는 알고리즘으로는 sha256, sha512 등이 있음.
   *  다른 sha 방식에 비해 sha512가 길지만 더 안전함(추천)
   * 
   * 2. update() 메서드의 인자로는 salt를 적용할 것이므로 평문 비밀번호에 salt를 더한 값을 넘겨줌.
   *  digest() 메서드의 인자로는 인코딩 방식을 넘겨줌 (base64, hex 방식 등)
   */
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");
  
  let result = models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: hashPassword,
    salt: salt
  })
  res.redirect('/user/sign_up');

//   models.user.create({
//     name: body.userName,
//     email: body.userEmail,
//     password: body.password
//   })
//   .then( result => {
//     res.redirect('/users/sign_up');
//   })
//   .catch( err => {
//     console.log(err);
//   })
});

// 메인
router.get('/', function(req, res, next) {
  res.send("환영~~ 대박 환영~~~ 어서와,,, 나가지마~~");
});

// 로그인 get
router.get('/login', function(req, res, next) {
  res.render('user/login');
});

// 로그인 post
router.post('/login', async function(req, res, next) {
  let body = req.body;

  let result = await models.user.findOne({
    where: {
      email: body.userEmail
    }
  });
  let dbPassword = result.dataValues.password;
  let inputPassword = body.password;
  let salt = result.dataValues.salt;
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  console.log("hashPassword:",hashPassword);
  console.log("inputPassword:",inputPassword);

  if(dbPassword === hashPassword){
    console.log("비밀번호 일치!");
    res.redirect("/user");
  } else {
    console.log("비밀번호 불일치");
    res.send("<script>alert('비밀번호를 확인하세요');history.back();</script>");
  }
});


module.exports = router;
  ``