// 연결관리를 할 소스 생성

const mysql = require('mysql');
const config = require('./db_info').local; // db 접속정보를 가져옴.

// mysql에 접속
module.exports = function(){
    return {
        init: function(){
            return mysql.createConnection({
                host: config.host,
                port : config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        }
    }
};

