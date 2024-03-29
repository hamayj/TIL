var express = require('express');
const models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// 게시글 목록
/* findAll에 인자로 where 조건 전달 가능
model.post.findAll({where : {writer: "hama"}})
*/
/* 기존 문법
router.get('/board', function(req, res, next){
  models.post.findAll()
  .then( result => {
    models.post.findOne({
      include: {
        model: models.reply,
        where: { postId : 4 }
      }
    })
    .then ( result2 => {
      console.log(result2.replies)
    })
    .catch(function(err){
      console.log("err : ", err);
    });
    res.render('show', {
      posts: result
    });
  });
});
*/

// 게시글 목록
router.get('/board', async function(req, res, next) {
  let result = await models.post.findAll();
  if(result) {
    for( let post of result ){
      let result2 = await models.post.findOne({
        include: {
          model: models.reply,
          where: {
            postId : post.id
          }
        }
      })
      if(result2){
        post.replies = result2.replies
      }
    }
  }
  res.render("show", {
    posts: result
  });
});

// 게시글 조회
router.get('/board/:id', function(req, res, next){
  const id = req.params.id;
  models.post.findOne({ where: { id: id }}).then ( result => {
    res.render('edit', {
      post: result
    });
  });
});

// 게시글 등록
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

// 게시글 조회
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

// 글 수정
router.put('/board/:id', function(req, res, next) {
  let postID = req.params.id;
  let body = req.body;

  models.post.update({
    title: body.editTitle,
    writer: body.editWriter
  }, {
    where : { id: postID }
  })
  .then (result => {
    console.log('데이터 수정 완료');
    res.redirect('/board');
  }) 
  .catch( err => {
    console.log('데이터 수정 실패');
  });
});

// 글삭제 
router.delete('/board/:id', function(req, res, next){
  const postID = req.params.id;

  models.post.destroy({
    where: { id: postID }
  })
  .then( result => {
    // res.redirect('/board');
    res.send("<script>alert('삭제되었습니다.');location.href='/board';</script>");
  })
  .catch( err => {
    console.log(" 데이터 삭제 실패! ");
  });
});

// 댓글 등록
router.post('/reply/:postID', function(req, res, next){
  let postID = req.params.postID;
  let body = req.body;

  models.reply.create({
    postId: postID,
    writer: body.replyWriter,
    content: body.replyContent
  })
  .then( results => {
    res.redirect('/board');
  })
  .catch ( err => {
    console.log(err);
  });
});

module.exports = router;
