const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('form', {
        name: 'hama',
        blog: 'hamamama.com',
        homepage: 'hama.net'
    }); // ejs 템플릿으로 보내줄 변수 선언하고, 데이터 담기.
}); // res.render는 해당 view 파일을 렌더링 할 수 있음.


router.post('/', function(req,res,next){
    res.json(req.body);
    // json 함수가 자동으로 받아온 폼 데이터를 json 형식으로 변경함.
});

module.exports = router; // module.exports 는 global 전역으로 해당 라우터를 사용하게 해ㅜㅁ,

