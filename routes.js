const express = require('express');
const multer = require('multer');
const uploadConfig = require('./src/config/upload');
const SessionController = require('./src/controllers/SessionController');
const SpotController = require('./src/controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions',SessionController.store);
routes.post('/spots', upload.single('thumbnail') ,SpotController.store);


module.exports = routes;