const prismaClient = require("../../prisma/prisma-client");

const listImageService = async () => {
 const listImages = await prismaClient.projects.findMany({
    select: {
        projectCover: true,
    }
 })

 return listImages
}

module.exports = listImageService