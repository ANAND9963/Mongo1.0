const express = require("express");

const bodyparser = require("body-parser");

const mongoose = require("mongoose");




const PORT = 3000;

const server = express();
server.use(bodyparser.json());
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/bear").then(()=>{
    console.log("database is running rockingly");
}).catch(()=>{
    console.log("database connection is failed");
})

server.listen(PORT, () =>{
    console.log(`server is running on port : ${PORT}`);
    
})


const bearRoutes = require('./Bears/router');
bearRoutes(server);

