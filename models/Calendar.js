const Sequelize = require("sequelize");
const db = require("../db");

const Calendar = db.define(
  "calendar",
  {
    day: {
      type: Sequelize.STRING,
      allowNull: false
    },
    workouts: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    },
    required: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    category: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    completedUsers: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false
    }
  },
  {
    timestamps: true,
    tableName: "calendar"
  }
);

module.exports = Calendar;
