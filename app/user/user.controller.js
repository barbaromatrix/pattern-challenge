const userController = () => {
  let userControllerInstance;

  const createController = () => {
    const talkInsideScope = (see) => see ? console.log('I am true and limited') : console.log('I am false and limited');

    return {
      talk: talkInsideScope,
      talkMore: talkOutsideScope,
      x: x
    }
  };

  const talkOutsideScope = () => console.log("Now that you moved me outside the scope, I more powerful than ever and I am going to keep talking, forever ahahahahahhahaaha!");

  const x = (req, res) => res.status(200).json('ok');

  return {
    createController: () => {
      if (!userControllerInstance) {
        userControllerInstance = createController();
      }

      return userControllerInstance;
    }
  }
};

module.exports = userController;
