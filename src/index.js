const express = require("express");
const cors = require("cors");
const projectRouter = require("./router/projects.routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(projectRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
