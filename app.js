require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

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


module.exports = app;
