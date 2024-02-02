const listImageService = require("../../services/project/list-image-service");

const listAllImagesController = async (req, res) => {
    try {
        const listAllImages = await listImageService()
        return res.status(200).send(listAllImages)
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = listAllImagesController