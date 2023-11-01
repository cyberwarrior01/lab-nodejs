const express = require("express")

const app = express()

app.get('/',(_,res)=>{
    res.send("hello rout")
})

app.listen(5000,()=>{
    console.log("listning on 5000");
})