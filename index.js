const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const Category = require('./models/Category');

const port = 4000;
const corsMiddleware = cors();
const jsonMiddleware = bodyParser.json();

app.use(corsMiddleware);
app.use(jsonMiddleware);

app.listen(port, () => console.log(`Server listening on port ${port}...`));

app.get('/user/:userId', (req, res, next) => {
    User.findOne({where: {id: req.params.userId}})
        .then(user => {
            res.json(user);
        })
        .catch(next);
});