const prismaClient = require("../../prisma/prisma-client");
const { hash } = require("bcryptjs");

const createUserService = async (data) => {
    const { password, secondName, email, name } = data

    const passwordEncrypted = await hash(password, 10);

    const createUser = await prismaClient.users.create({
        data: {
            password: passwordEncrypted,
            secondName,
            email,
            name
        },
    })

    return createUser
}

module.exports = createUserService