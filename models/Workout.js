const Sequelize = require('sequelize')
const db = require('../db')


const Workout = db.define('workout',{
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      videoUrl: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      totalTime: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    },{
    timestamps: true,
        tableName: 'workout'
      })

    
    
module.exports = Workout