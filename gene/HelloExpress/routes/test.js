const express = require('express');
const router = express.Router();

router.get("/hahaha", function (req, res, next) {
    res.send("새 라우터 등록!");
});

module.exports = router;