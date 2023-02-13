module.exports = (function (){ // 모듈로 사용할 수 있도록 exports 해줌.
    return {
        local: { // 해당 변수 안에 배열로 접속 정보를 저장함. 이제 접속 정보는 여기서만 관리됨.
            // 만약 DB 접속 정소가 바뀐다면 이 소스만 수정하면 됨.
            host: 'localhost',
            user: 'user',
            password: '1234',
            database: 'sesac',
            port: '3306'            
        }
    }
})();


// 접속 정보 파일 db_info.js