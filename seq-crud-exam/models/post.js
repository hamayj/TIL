'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  const post = sequelize.define('post', {
    title: {
      type: DataTypes.STRING,
      allowNull : false
    },
    writer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  /** 
   * post 객체에 associate 프로퍼티를 함수로 정의하면
   * /models/index.js에서 post모델에 대한 관계를 알 수 있게 됨.
    
   * */ 
  post.associate = function(models) {
    post.hasMany(models.reply);
  }
  return post;
};