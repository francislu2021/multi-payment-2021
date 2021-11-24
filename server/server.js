import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {readdirSync} from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();

//set up db
mongoose.
connect(process.env.DATABASE)
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB Connection eror", err));




// middlewares



//autoload routes



//listen


