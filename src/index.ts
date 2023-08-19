//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
import { connectToDatabase } from "./config/connectToDatabase";

//Using
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
connectToDatabase();

//Listening
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT);
})