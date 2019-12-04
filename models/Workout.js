const Sequelize = require('sequelize')
const db = require('../db')


const Workout = db.define('workout',{
    workout: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    },{
    timestamps: true,
        tableName: 'workout'
      })

    
    
module.exports = Workout