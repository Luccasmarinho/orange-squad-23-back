const utils = {
    messageJson: (objRes, status, Mensagem) => {
        if (typeof Mensagem == "string") return objRes.status(status).json({ Mensagem })

        const msgJson = !Mensagem
        ? objRes.status(status).json()
        : objRes.status(status).json(Mensagem)

        return msgJson
    }
};

module.exports = utils