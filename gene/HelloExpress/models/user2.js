'use strict'; // 엥 ㅇ ㅓ ㅉ ㅓ 라고

module.exports = (sequelize, DataTypes) => {
  const user2 = sequelize.define('user2', {
    user_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull : false
    },
    email: {
      type: DataTypes.STRING,
      allowNull : false
    }
  }, {
    classMethods: {
      associate: function(models) {
    
      }
    }
  });
  return user2;
};