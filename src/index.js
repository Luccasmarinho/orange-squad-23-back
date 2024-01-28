require("express-async-errors");
const express = require("express");
const cors = require("cors");
const router = require("./router/export/export.routes");
const dotenv = require("dotenv");
const AppError = require("./errors/app-errors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/tmp", express.static("tmp"));
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
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
