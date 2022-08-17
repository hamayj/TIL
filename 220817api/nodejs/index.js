const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const axios = require("axios")
const cors = require("cors");

app.use(cors());
app.set("view engine", "ejs");
app.use( express.static( "public" ) );
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res) {
    res.render("test");
})
app.get("/test", function(req,res) {
    axios({
        method: "get",
        url: "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=Su%2FjD4AQWu0vPPnQkcm0dVbiPxWqLgUu6AN6Snk4oK0JGGr38kehRNwGQtPIWP9iZ7BzO%2FQccEWTlb5yAxsUPw%3D%3D&numOfRows=10&dataType=JSON&pageNo=1&base_date=20220817&base_time=0600&nx=55&ny=127"
    }).then((result) => {
        return result.data.response.body;
    }).then((data) => {
        console.log( "data : ", data);
        console.log( "items : ", data.items );
        console.log( "items - item : ", data.items.item );

        let items = data.items.item;
        for ( let i = 0; i < items.length; i++ ){
            console.log( items[1] );
        } // 요건 함수 이상하게 한 것 같다고 말씀하심
        res.send(true);
    });
});
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
})