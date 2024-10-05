import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routes/index.js";
import morgan from "morgan";
import moment from "moment";

const port = 4321;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// morgan logs
// Buat token untuk waktu aksi
morgan.token("action-time", function (req, res) {
  return moment().format("YYYY-MM-DD HH:mm:ss");
});

// Buat token untuk IP pengakses
morgan.token("remote-addr", function (req, res) {
  return req.ip;
});

// Buat token untuk body request
morgan.token("body", function (req, res) {
  return JSON.stringify(req.body);
});

// Use morgan middleware with custom format that includes the body
app.use(
  morgan(
    ":method :url :status :response-time ms - :body :action-time :remote-addr"
  )
);

app.use(router);

app.listen(port, () => console.log(`run and serve on port : ${port}`));
