const listUserDataService = require("../../services/user/user-data-service");

const listUserDataController = async (req, res) => {
  const userId = req.userId;

  try {
    const listUserData = await listUserDataService(userId);
    return res.status(200).send(listUserData);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = listUserDataController;
