import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routes/index.js";

const port = 4321;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(port, () => console.log(`run and serve on port : ${port}`));
