const userController = () => {
  let userControllerInstance;

  const findAll = (req, res) => {
    return res.status(200).json({});
  };

  const create = (req, res) => {
    return res.status(200).json(req.body);
  };

  return {
    createController: () => {
      if (userControllerInstance) return userControllerInstance;

      userControllerInstance = {
        findAll,
        create,
      };

      return userControllerInstance;
    }
  }
};

module.exports = userController;
