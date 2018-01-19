const express = require('express');
const app = express();

const userController = require('./user/index');

const x1 = userController.createController();

module.exports = app;
