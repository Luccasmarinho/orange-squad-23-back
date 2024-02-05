const AppError = require("../../errors/app-errors");
const createUserByGoogleService = require("../../services/user/create-user-by-google-service");

const createUserByGoogleController = async (req, res) => {
  if (!req.file) {
    throw new AppError.AppError("Error no image");
  } else {
    const { originalname, filename: userImage } = req.file;
    try {
      await createUserByGoogleService(req.body, userImage);
      return res.status(201).send({ msg: "User registered sucessfully" });
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  }
};

module.exports = createUserByGoogleController;
