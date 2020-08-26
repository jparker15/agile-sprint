//requirements
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
//express app
const app = express();
//dotevn requirements
const port = process.env.PORT || 3005;
const connectURI = process.env.MONGO;

mongoose.connect();

app.listen(port);
