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
  if(req.cookies){
    console.log(req.cookies);
  }
  res.send("환영~~ 대박 환영~~~ 어서와,,, 나가지마~~");
});

// 로그인 get
router.get('/login', function(req, res, next) {
  let session = req.session;

  res.render('user/login', {
    session: session
  });
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
  console.log("inputPassword:",inputPassword); // 근데 이렇게 노출되면 안되는거 아냐.. 보안 없는거 아냐..
  

  if(dbPassword === hashPassword){
    // 비밀번호가 일치했을 때 쿠키를 설정할 수 있도록 했음.
    console.log("비밀번호 일치!");
    // 세션 설정
    req.session.email = body.userEmail;
    /* 쿠키 설정하는 cookie() 메서드를 호출할 때, 
    * 첫 번째 인자는 쿠키의 이름, user
      두 번째 인자는 쿠키의 값, body.userEmail
      세 번째 인자는 옵션. 단위는 ms (1일 == 60*60*24초)
      예제에서는 시간을 기준으로 24시간으로 설정했음.
      웹 서버에서만 접근할 수 있도록 쿠키에 플래그를 지정하는 httpOnly 옵션을 추가함.
    */
    // 쿠키 설정
    // res.cookie('user', body.userEmail, {
    //   expires: new Date(Date.now() + 900000),
    //   httpOnly: true
    // });    
    // res.redirect('/user');  
  } else {
    console.log("비밀번호 불일치");
    res.send("<script>alert('비밀번호를 확인하세요');history.back();</script>");
  }
  res.redirect('/user/login');
});


// 로그아웃
router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');
  res.redirect('/user/login');
});

/**
 * 세션 삭제
 * 사용자가 로그아웃 했을 때는 사용자 인증된 상태가 유지되면 안되므로, 세션을 삭제하는 것이 좋음.
 * 세션을 삭제하는 메서드는 destroy()임.
 * 또한 세션을 설정한 미들웨어에서 쿠키에 대한 정보도 추가했으므로, 쿠키도 삭제해줘야 함.
 * clearCookie() 메서드를 통해 쿠키를 삭제할 수 있으며, 이 때 인자로 넘겨주는 값을 미들웨어에서 등록한 세션키.
 */

module.exports = router;