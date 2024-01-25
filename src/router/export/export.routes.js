const userRouter = require("../user.routes");
const loginRouter = require("../login.routes");
const projectsRouter = require("../projects.routes");

const router = [userRouter, loginRouter, projectsRouter];

module.exports = router