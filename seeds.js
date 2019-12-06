const db = require("./db");
const Calendar = require("./models/Calendar");
const Workout = require("./models/Workout");

// Seeding workout table
db.sync({ force: false }).then(() => {
  Workout.destroy({
    where: {}
  }),
    Workout.create({
      id3: 1,
      title: "Stretching",
      videoUrl:
        "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
      difficulty: 1,
      calories: 120,
      totalTime: 600000,
      description: `<div>
          <p>In this exercise we are going to work on your flexibility.</p>
          <ul>
            <li>exercise 1</li>
            <li>exercise 2</li>
            <li>exercise 3</li>
          </ul>
        </div>`
    }),
    Workout.create({
      id: 2,
      title: "Strenght",
      videoUrl:
        "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
      difficulty: 1,
      calories: 120,
      totalTime: 600000,
      description: (
        `<div>
          <p>In this exercise we are going to work on your strenght.</p>
          <ul>
            <li>exercise 1</li>
            <li>exercise 2</li>
            <li>exercise 3</li>
          </ul>
        </div>`
      )
    }),
    Workout.create({
      id: 3,
      title: "Cardio",
      videoUrl:
        "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
      difficulty: 1,
      calories: 120,
      totalTime: 600000,
      description: (
        `<div>
          <p>In this exercise we are going to work on your durability.</p>
          <ul>
            <li>exercise 1</li>
            <li>exercise 2</li>
            <li>exercise 3</li>
          </ul>
        </div>`
      )
    }),
    Workout.create({
      id: 4,
      title: "Legs",
      videoUrl:
        "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
      difficulty: 1,
      calories: 120,
      totalTime: 600000,
      description: (
        `<div>
          <p>In this exercise we are going to work on your movibility.</p>
          <ul>
            <li>exercise 1</li>
            <li>exercise 2</li>
            <li>exercise 3</li>
          </ul>
        </div>`
      )
    }),
    Workout.create({
      id: 5,
      title: "Abdominals",
      videoUrl:
        "https://imptrainer.com/wp-content/uploads/2019/11/15-Minuti-Di-Esercizi-Per-Tonificare-Gli-Addominali.mp4",
      difficulty: 1,
      calories: 120,
      totalTime: 600000,
      description: (
        `<div>
          <p>In this exercise we are going to work on your core.</p>
          <ul>
            <li>exercise 1</li>
            <li>exercise 2</li>
            <li>exercise 3</li>
          </ul>
        </div>`
      )
    });
});

// Seeding calendar table
db.sync({ force: false })
  .then(() =>
    Promise.all([
      Calendar.destroy({
        where: {}
      }),
      Calendar.create({
        day: 1,
        workouts: [1, 2],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 2,
        workouts: [2, 3],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 3,
        workouts: [3, 1],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 4,
        workouts: [1, 3, 1],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 5,
        workouts: [1, 4],
        required: false,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 6,
        workouts: [1, 5],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 7,
        workouts: [],
        required: true,
        category: 1,
        completedUsers: []
      }),
      Calendar.create({
        day: 8,
        workouts: [1, 2],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 9,
        workouts: [2, 3],
        required: false,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 10,
        workouts: [3, 1],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 11,
        workouts: [1, 3, 1],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 12,
        workouts: [1, 4],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 13,
        workouts: [1, 5],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 14,
        workouts: [],
        required: true,
        category: 2,
        completedUsers: []
      }),
      Calendar.create({
        day: 15,
        workouts: [1, 2],
        required: true,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 16,
        workouts: [2, 3],
        required: false,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 17,
        workouts: [3, 1],
        required: true,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 18,
        workouts: [1, 3, 1],
        required: true,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 19,
        workouts: [1, 4],
        required: true,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 20,
        workouts: [1, 5],
        required: false,
        category: 3,
        completedUsers: []
      }),
      Calendar.create({
        day: 21,
        workouts: [],
        required: true,
        category: 3,
        completedUsers: []
      })
    ])
  )
  .catch(console.error);
