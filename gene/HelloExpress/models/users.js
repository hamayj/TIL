module.exports = function (sequelize, DataTypes) {
    /* 모델을 정의하는 메서드는 define()
    파라미터는 다음과 같음. sequelize.define("객체명", 스키마 정의, 테이블 설정);
    즉, DB에 user라는 테이블을 정의하고 이는 User라는 객체로 맵핑됨.
    */
    let user = sequelize.define("User", {
        userID: {
            field: "user_id",
            type: DataTypes.STRING(50),
            unique: true,
            allowNull : false
        },
        password: {
            field:"password",
            type: DataTypes.STRING(30),
            allowNull: false
        }    
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "user1" // 테이블 이름
    });
    return user;
}