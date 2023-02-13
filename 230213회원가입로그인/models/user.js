'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name : {
      type: DataTypes.STRING,
      allowNull : false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      primaryKey: true
      // email 컬럼을 고유키로 두고, email 양식이 맞는지 확인하는 validate도 추가.
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    }
  });

  return user;
}