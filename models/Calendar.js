const Sequelize = require('sequelize')
const db = require('../db')


const Calendar = db.define('calendar',{
    day: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },{
    timestamps: true,
        tableName: 'calendar'
      })

    
    
module.exports = Calendar