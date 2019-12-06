const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/User");
const Category = require("./models/Category");
const Calendar = require("./models/Calendar");
const Workout = require("./models/Workout");

const port = 4000;
const corsMiddleware = cors();
const jsonMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(jsonMiddleware);

//require("./seeds");

app.listen(port, () => console.log(`Server listening on port ${port}...`));

//----------------USER ROUTES-------------------//
app.get("/user/:userId", (req, res, next) => {
  User.findOne({ where: { id: req.params.userId } })
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

app.post("/user", (req, res, next) => {
  let data = req.body;
  User.create(data)
    .then(user => res.json(user))
    .catch(next);
});


// app.post("/category", (req, res, next) => {
//   let data = req.body;
//   Category.create(data)
//     .then(category => res.json(category))
//     .catch(next);
// });

//----------------CALENDAR ROUTES-------------------//
app.get('/calendar', (req,res, next) => {
    Calendar.findAll()
        .then(calendar => {
            res.json(calendar);
        })
        .catch(next)
})

// PUT route once a user has completed a workout
app.put("/:userId/calendar/:day", (req, res, next) => {
  Calendar.findOne({
    where: {
      day: req.params.day
    }
  }).then(calendar => {
    calendar.completedUsers.push(req.params.userId);
    calendar
      .update(
        {
          completedUsers: calendar.completedUsers
        },
        {
          where: {
            day: req.params.day
          }
        }
      )
      .then(calendar => res.json(calendar));
  });
});

//----------------WORKOUT ROUTES-------------------//
app.get('/workout', (req,res, next) => {
    Workout.findAll()
        .then(workout => {
            res.json(workout);
        })
        .catch(next)
})