require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Te haz conectado a mongoDB');
    } catch (error) {
        console.log(error)
    }
})();


//rutas frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/registro', express.static(path.resolve('views', 'register')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('img')));

//IMPORTANTE
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('tiny'));

//rutas de backend
app.use('/api/users', usersRouter)


module.exports = app;
