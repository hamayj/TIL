const express = require('express');
const router = express.Router();
const multer = require('multer');

// 1. multer 미들웨어 등록
let upload = multer({
    dest: "upload/"
});
/**
 * multer 미들웨어를 등록할 때 인자로 목적지( dest ) 프로퍼티가 추가된 객체를 전달했습니다.
multer 미들웨어 등록 시 추가 할 수 있는 옵션의 정보는 여기를 참고해주세요.
dest 프로퍼티의 값으로 upload/ 를 작성했는데, 준비 작업에서 uploads에 대한 폴더는 /upload 라는 가상 경로로 접근할 수 있도록 해주었기 때문입니다. 따라서 파일이 저장될 목적지는 upload/****가 됩니다.
uploads 폴더가 생성되어 있어야 업로드 된 파일이 저장됩니다. 
 */

// 뷰 페이지 경로
router.get('/show', function(req, res, next) {
    res.render('board');
});

// 2. 파일 업로드 처리 : router 함수의 매개변수가 3개임.
//  두 번째 인자로 upload 객체의 single()메서드를 호출함.
// single() 메서드의 인자로는 form에서 파일을 넘겨주는 요소의 name 애트리뷰트인 imgFile을 작성.
router.post('/create', upload.single("imgFile"), function(req, res, next){
    // 3. 파일 객체
    let file = req.file // 원래 이렇게 넘어왔었나??
    // multer 미들웨어를 등록하면 요청 객체에 file 또는 files 객체가 추가됨.
    // single() 메서드를 호출했기 때문에 req.file 객체에는 업로드된 파일의 정보가 담겨있음.

    // 4. 파일 정보
    let result = {
        originalName : file.originalname,
        size: file.size,
    }

    res.json(result);
});

module.exports = router;