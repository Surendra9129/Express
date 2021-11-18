const express= require('express');
const app=express();
const user=require('./user.json')

app.get('/',(req,res)=>{
    res.send("Welcome to home Page")
})

app.get('/user',(req,res)=>{
    res.send({user})
})

app.listen(3000,()=>{
    console.log("port is running on 5000");
})