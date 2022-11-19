const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("working by me")
});
app.listen(4000,()=>{
    console.log("Server working....");
})