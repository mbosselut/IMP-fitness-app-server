const Sequelize = require('sequelize')
const db = require('../db')
const Category = require('./Category')
const Calendar = require('./Calendar')
const Workout = require('./Workout')



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
        type: Sequelize.TEXT,
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
       Category.belongsTo(Calendar)  
       Workout.belongsTo(Calendar)
       Workout.belongsTo(Category)
       
       Calendar.hasMany(Workout)
      User.hasOne(Category)
    
module.exports = User