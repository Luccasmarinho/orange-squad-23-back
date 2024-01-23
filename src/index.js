require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});