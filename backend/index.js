const express = require("express");

const chats = require("./data/data")

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Namasta</h1>")
});

app.get("/api/chat",(req,res)=>{
    res.send(chats)
});

app.get("/api/chat/:id",(req,res)=>{
    const singleChat = chats.find((c)=> c._id = req.params.id);
    res.send(singleChat);
});


const port = 3000;
app.listen(port,()=>{
    console.log("app started in port ",port)
})