import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/dbConfig.js";
import cors from "cors";
import morgan from "morgan";

//<==============IMPORT ROUTES=============>
import voterRoutes from "./src/routes/voterRoute.js";
import vCenterRoutes from "./src/routes/vCenterRoute.js"
import conflictRoutes from "./src/routes/conflictRoute.js"
dotenv.config();

const app = express();
//<==============ADDITIONAL MIDDLEWARE===============>
app.use(express.json());
app.use(morgan("dev"));
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());

//<==================DB CONNECT============>
connectDB();

//<==============USING ROUTES=============>
app.use("/voter", voterRoutes); // voter routes
app.use("/vcenter", vCenterRoutes) // voting center
app.use("/data", conflictRoutes); // check conflict routes

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server  running ${port}`);
});