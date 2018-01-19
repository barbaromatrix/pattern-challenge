const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userController = require('./user/index');

app
  .get('/', userController.findAll)
  .post('/', userController.create)

module.exports = app
