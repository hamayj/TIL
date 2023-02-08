/*
models 폴더는 Model을 정의한 js 파일들을 모아놓은 폴더입니다.

( 모델을 정의하는 방법은 다음 글에서 살펴보겠습니다. )

 

models/index.js 파일은 다음을 과정을 수행합니다.

/config/config.json 파일의 설정 값을 읽어 sequelize를 생성
models 폴더 아래에 존재하는 js 파일을 모두 로딩
db 객체에 Model을 정의하여 반환
정리하면, 여러 모델들을 한 객체( db )에 담아 반환하는 역할을 합니다.

그렇다면 어떻게 models 폴더의 모든 파일들을 불러와서 db객체에 모델을 정의할 수 있을까요?

*/


'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
