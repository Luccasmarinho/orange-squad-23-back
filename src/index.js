require("express-async-errors");
const express = require("express");
const cors = require("cors");
const projectRouter = require("./router/projects.routes");
const userRouter = require("./router/user.routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(projectRouter);
app.use(userRouter);
app.use((err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "Error",
      message: err.msg,
    });
  }

  return res.status(500).json({
    status: "Error",
    message: `Internal Server Error - ${err.message}`,
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
