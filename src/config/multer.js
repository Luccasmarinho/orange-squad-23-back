const { uuid } = require("uuidv4");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./tmp",
  filename(req, file, callback) {
    const fileName = `${uuid()}-${file.originalname}`;

    return callback(null, fileName);
  },
});
const uploadConfig = multer({ storage: storage });

module.exports = uploadConfig;
