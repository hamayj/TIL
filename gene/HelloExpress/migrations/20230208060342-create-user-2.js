'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  /**
   * migration이란 up 기능과 down 기능을 가진 일련의 데이터베이스 작업.
   * up: 데이터베이스를 변경
   * sequelize db:migrate 명령어 실행시 up에 정의된 코드 실행
   * down: up이 실행되기 전의 상태로 데이터 베이스를 복원
   * sequelize db:migrate:undo 명령어 실행시 down에 정의된 코드 실행
   *  */ 
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user2s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user2s');
  }
}; 