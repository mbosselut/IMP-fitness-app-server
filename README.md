# my-imp-trainer-server
Back-end for the IMP trainer application. The client repository can be found [here](https://github.com/Official-Codaisseur-Graduate/my-imp-trainer). Built with NodeJS and PosgreSQL through Sequelize.

## Set-up

The back-end can be ran locally (port 4000 is currently selected), but is also deployed online at https://radiant-ocean-32463.herokuapp.com/ 
The server needs an empty PostgreSQL docker container running on port 5432 and with the password 'secret'.

Local installation and setup through `git clone`, `npm install`, `node index.js`.

### Seeding the DB
The database can be seeded the first time by uncommenting the `require("./seeds")` line in index.js. The seeds will create a new user, a 21-day calendar and 5 different workouts on a new database.

##  Models

* User : user profile with name, login details, profile picture, starting date
* Calendar : referencing the workouts to be realised for each day of the program. Contains calendar day, reference of workouts to be realised for that day, array of users having already completed this workout*, category (difficulty level). Currently there is a single calendar shared by all users
* Workout : list of exercises showing the type of workout (abs/stretching/legs...), calories burned, time to complete, workout video

*This is the way progress is currently tracked for users, but hasn't been implemented in the front-end yet.

## Routes 

Method | Path | Role
------------ | -------------| -------------
GET | /user/:userId | Get a single user
POST | /user | Create a new user*
GET | /calendar | Get full program calendar
PUT | /:userId/calendar/:day | Pushing a :userId to the array of 'Completed users' for a specific :day*
GET | /workout | Get full list of workouts
*These routes are implemented on the back-end, but not yet used in the front-end section.

## Features to be implemented
* Authentication
* Signing up
* Calculate streak of the user (how many days in the row has he/she been completing workouts)
* Alongside front-end : adding user weight and height to user profile, to calculate calories burned
