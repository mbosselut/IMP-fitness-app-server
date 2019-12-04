const Sequelize = require('sequelize')
const db = require('../db')
const Category = require('./Category')


const User = db.define('user',{
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
      },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
      },
    email: {
        type: Sequelize.STRING,
        allowNull: false
      },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      },
    },{
    timestamps: true,
        tableName: 'user'
      })

       Category.belongsTo(User)  

      User.hasOne(Category)
    
module.exports = User