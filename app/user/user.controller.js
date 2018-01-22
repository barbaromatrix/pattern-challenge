const userController = () => {
  let userControllerInstance

  return {
    createController: () => {
      if (userControllerInstance) return userControllerInstance

      userControllerInstance = {
        findAll (req, res) {
          return res.status(200).json({})
        },
        create (req, res) {
          return res.status(200).json(req.body)
        }
      }

      return userControllerInstance
    }
  }
}

module.exports = userController
