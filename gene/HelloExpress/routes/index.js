var express = require('express');
var router = express.Router();
const mysql = require("mysql");

// 커넥션 연결
// createConnection() 메서드를 호출하여 MySQL과 연동하는 코드
// " 로 반환된 객체를 client 변수에 할당.
// 그러면 client 객체를 통해 쿼리를 작성할 수 있음.

let client = mysql.createConnection({
  user: "user",
  password : "1234",
  database : "mysqltest"
});
/* 
사실 이렇게 설정하는 것은 바람직하지 않음.
DB 관련 설정 파일을 config 폴더를 만들어서 관리하는 것이 좋으며, 커넥션 풀 등 고려해야 할 것이 많음. 
MySQL 모듈을 이런식으로 사용한다는 것을 알아두라고 만든 코드
참고로 query를 작성하는 것 말고 ORM을 이용해 직관적인 메서드를 통해 DB 작업을 할 수 있음.
sequelize 모듈을 이용하면 코드가 간결해지고 생산성이 높아짐.


*/


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); // depth 구조도 경로를 그대로 명시해주면 됨.




/* depth. */
router.get('/', function(req, res, next) {
  res.render('product/edit', { title: 'Express' });
}); // depth 구조도 경로를 그대로 명시해주면 됨.


// 쿼리를 작성하는 방법은 query()메서드를 호출해 인자로 쿼리 내용을 보내면 됨.
// get 라우터 함수는 products 테이블의 모든 상품을 조회하여 웹페이지에 json으로 반환하는 코드.
router.get('/create', function(req, res, next) {
  client.query("select * from products;", function(err, result, fields){
    if(err) {
      console.log("쿼리 오류", err);
    }
    else {
      // console.log("데이터 보기", result);
      // result에는 products 테이블의 데이터들이 배열형태로 담겨있음.
      res.render("create", {
        results: result
      });
    }
  });
});

// post 방식의 데이터는 req.body를 통해 가져올 수 있음.
router.post('/create', function(req, res, next) {
  const name = req.body.name;
  const modelnumber = req.body.modelnumber;
  const series = req.body.series;
  const datas = [name, modelnumber, series];
  // 사용자가 어떤 입력밧을 전달할 지 모르기 때문에 insert 쿼리를 작성할 때 ? 키워드를 사용함.
  // 각각의 ?는 client.query() 메서드의 두 번째 파라미터인 배열의 각 원소(input 태그의 각 name 속성)가 대응됨.
  // 어떤 column에 들어갈 것인지는 vaules 앞에 있는 컬럼에 대응되어 값이 저장됨.
  client.query("insert into products (name, modelnumber, series) values (?,?,?)", datas, function(err, rows){
    if(err) console.error("err: ", err);
    res.redirect('/create');
  });
})

module.exports = router;
