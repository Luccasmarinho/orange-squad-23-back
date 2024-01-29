const AppError = require("../../errors/app-errors");
const uploadUserImageService = require("../../services/user/user-image-service");

const uploadUserImageController = async (req, res) => {
  const userId = req.userId;

  if (!req.file) {
    throw new AppError.AppError("Error no image");
  } else {
    try {
      const { originalname, filename: userImage } = req.file;

      await uploadUserImageService(userId, userImage);
      return res.status(200).send({ msg: "Image uploaded sucessfully" });
    } catch (error) {
      console.log("teste");
      return res.status(400).send(error);
    }
  }
};

module.exports = uploadUserImageController;
