const userController = require('./user.controller')();

module.exports = {
  createController: userController.createController
};
