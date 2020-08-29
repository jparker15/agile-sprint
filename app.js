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

//mongodb connection
const optionsObj = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(connectURI,optionsObj,()=>{
    console.log("server successful connection")
});
mongoose.connection.on("error", (err) =>{
    console.log(`error connecting to MongoDB,\nError: ${err}`);
});
mongoose.connection.on("connected", () =>{
    console.log("server attempting connection to database")
})

//start server liserner
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);

});
