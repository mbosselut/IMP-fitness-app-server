const Sequelize = require('sequelize')
const db = require('../db')


const Category = db.define('category',{
    level: {
        type: Sequelize.STRING,
        allowNull: false
      },
    levelNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },{
    timestamps: true,
        tableName: 'category'
      })

    
    
module.exports = Category