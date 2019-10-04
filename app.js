const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();


app.use(express.json())
app.use(routes);


mongoose.connect('mongodb+srv://maxmendes:backendApp@backend-n7vq7.mongodb.net/appDbretryWrites=true&w=majority');


app.listen(3000, () => {
    console.log('Server running...');
});