var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended : false })
// 이 부분에 post 방식으로 넘어온 데이터가 들어옴.
// 한글로 넘어와도 잘 넘어갈 수 있게.

module.exports = function(app){
    app.get("/", function(req, res){
        res.render("index");
    });

    app.get("/parameter", function(req, res){
        // get 방식 경우에는 req 안에 data가 다 들어가있음.
        var render_data = {
            data1 : req.query.data1,
            data2 : req.query.data2
        };
        res.render("parameter.ejs", render_data)
    });

    app.post("/parameter", urlencodedParser, function(req, res){
        var render_data = {
            data1 : req.body.data1,
            data2 : req.body.data2
        };  // get일 때는 query, post일때는 body
        res.render("parameter.ejs", render_data);
    });

    app.get("/save_cookie", function(req, res){
        var op = {
            maxAge : 365 * 24 * 60 * 60
            // 일 시 분 초 -> 1년동안 쿠키 유지
        };
        res.cookie("cookie1", "aaaaa", op);
        // 쿠키이름, 쿠키값, 옵션
        res.render("save_cookie.ejs");
    });
    
    app.get("/load_cookie", function(req, res){
        var render_data = {
            cookie1 : req.cookies.cookie1 
        };
        res.render("load_cookie.ejs", render_data);
    });

    app.get("/save_session", function(req, res){
        req.session.data1 =  100;
        req.session.data2 = "안녕하세요";
        
        res.render("save_session.ejs");
    });
    // 쿠키는 문자열만 저장이 가능한데, 세션은 자바스크립트에서 사용하는 모든 타입 가능.
    app.get("/load_session", function(req, res){
        var render_data = {
            data1 : req.session.data1,
            data2 : req.session.data2
        };
        res.render("load_session.ejs", render_data);
    })
};