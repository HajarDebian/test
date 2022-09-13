const express = require("express");
const {nanoid} = require('nanoid');
const {userRouter, blogRouter}= require('./router/allRouter');
const app = express();
const port = 3000;

app.use(express.json())
app.use(userRouter,blogRouter);

app.listen(port, ()=>{
    console.log("running.....");
})