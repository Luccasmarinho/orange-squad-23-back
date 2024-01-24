const createUserService = require("../../services/user/create-user-service");

const controller = {
  createUser: async (req, res) => {
    try {
      const createUser = await createUserService(req.body);
      res.status(201).send(createUser);
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};

module.exports = controller;
