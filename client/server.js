const express = require("express");
const path = require ("path");
const routes = require("../routes");
const app = express();
const PORT= process.env.PORT || 8000;

require("../services/passport");


app.use(express.urlencoded({extended : true}));

app.use(express.json());


app.use(express.static("client/build"));


app.use(routes)

db = require("../config/connection")

db(process.env.MONGODB_URI || "mongodb://localhost/transitions");

app.get("*", (req, res)=> {

    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})


app.listen(PORT, function(){

console.log(` ==> API Server now listening on PORT ${PORT}`)
})



