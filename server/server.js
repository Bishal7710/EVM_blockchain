import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/dbConfig.js";
import cors from "cors";
import morgan from "morgan";

//<==============IMPORT ROUTES=============>
// import studentRoutes from "./src/routes/studentRoute.js";
// import dataRoutes from "./src/routes/dataRoute.js";

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
// app.use("/student", studentRoutes); // student routes
// app.use("/data", dataRoutes); // data routes

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server  running ${port}`);
});