const Sequelize = require("sequelize");
const db = require("../db");
const Calendar = require("./Calendar");
const Workout = require("./Workout");

const User = db.define(
  "user",
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
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
    category: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    startDate: {
      type: Sequelize.DATEONLY,
      allowNull: true
    }
  },
  {
    timestamps: true,
    tableName: "user"
  }
);

module.exports = User;
