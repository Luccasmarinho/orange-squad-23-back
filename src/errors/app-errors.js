class AppError {
  constructor(msg, statusCode = 400) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}

class UnauthorizedError {
  constructor(msg, statusCode = 401) {
    this.msg = msg;
    this.statusCode = statusCode;
  }
}

module.exports = { AppError, UnauthorizedError };
