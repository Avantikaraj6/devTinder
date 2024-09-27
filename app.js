const express = require("express");

const app = express();

app.use("/test",(req,res) =>{
    res.send("Hello from the test")
})

app.use("/hello",(req,res) =>{
    res.send("Hello Hello Hello")
})

app.listen(5000,() => {
    console.log("Server is successfully running on port 3000")
});