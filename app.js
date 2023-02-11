const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Welcome to mining!!")
})

app.get('/students',(req,res)=>{
    res.send("this is student section!!")
})

app.get('/faculty',(req,res)=>{
    res.send("this is faculty section")
})

app.get('/events',(req,res)=>{
    res.send("this is event section");
})



app.listen(3000,()=>{
    console.log("Server Started")
})