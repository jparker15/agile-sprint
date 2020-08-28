require("dotenv").config();

//packages
const mongoose = require("mongoose");
const express = require("express");

//dotevn consts 
const port = process.env.PORT || 3005;
const connectURI = process.env.MONGO;

//main express app
const app = express();

app.use(express.static("static"));

const homeRouter = require("./routes/homeRouter");

app.use("/", homeRouter);

app.get("/", (res,req) =>{
    res.json({"message":"message world"});
});

// mongoose.connect(connectURI);
//start server liserner
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);

});
