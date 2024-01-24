const utils = {
  messageJson: (objRes, status, msg) => {
    if (typeof msg == "string") return objRes.status(status).json({ msg });

    const msgJson = !msg
      ? objRes.status(status).json()
      : objRes.status(status).json(msg);

    return msgJson;
  },
};

module.exports = utils;
