const utils = {
  messageJson: (objRes, statusCode, msg) => {
    if (typeof msg == "string") return objRes.status(statusCode).json({ msg, statusCode });

    const msgJson = !msg
      ? objRes.status(statusCode).json()
      : objRes.status(statusCode).json(msg);

    return msgJson;
  },
};

module.exports = utils;
