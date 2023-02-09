var express = require('express');
const models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* findAll에 인자로 where 조건 전달 가능
model.post.findAll({where : {writer: "hama"}})
*/
router.get('/board', function(req, res, next){
  models.post.findAll().then( result => {
    res.render('show', {
      posts: result
    });
  });
});

router.post('/board', function(req, res, next){
  let body = req.body;

  /**
   * sequelize를 사용하는 궁극적인 목적은 query를 직접 작성하지 않고 직관적인 이름을 가진 메서드를 사용함으로써,
   * query를 대체하는 것.
   * create() 메서드는 sequelize에서 제공하는 메서드로, 내부적으로 insert 쿼리가 실행됨.
   * create() 메서드의 인자로는 테이블에 추가할 데이터들을 객체로 정의하여 전달함.
   * 예제에서는 title과 writer 컬럼에 데이터를 추가해야 하므로 이들을 key로 갖는 객체를 전달했음.
   */
  models.post.create({
    title: body.inputTitle,
    writer: body.inputWriter
  }) // sequelize는 Promise 문법이 내부적으로 동작함.
  .then(result => {
    console.log('데이터 추가 완료');
    res.redirect("/board");
  })
  .catch ( err => {
    console.log("데이터 추가 실패");
  });
});

router.get('/edit/:id', function(req, res, next){
  let postID = req.params.id;
  
  models.post.findOne({
    where: {id: postID}
  })
  .then(result => {
    res.render('edit', {
      post: result
    });
  }) 
  .catch( err => {
    console.log("데이터 조회 실패");
  });
});


module.exports = router;
