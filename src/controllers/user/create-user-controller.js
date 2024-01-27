const createUserService = require("../../services/user/create-user-service");

const createUserController = async (req, res) => {
  try {
    await createUserService(req.body);
    return res.status(201).send({
      msg: "User registered sucessfully",
    });
  } catch (error) {
    return res.status(400).send(error);
  }
};
module.exports = createUserController;
