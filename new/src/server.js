var mongoose = require("mongoose");
const express = require("express");
const app = express();
const session = require('express-session')
const userdetails=require('./schema.js');
const cors = require('cors');

var uri = "mongodb+srv://Nimesh123:vedant123@cluster0.s5osh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, );

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
app.use(cors());
app.use(express.json())
app.use(session({secret: 'ssshhhhh'}));

app.get('/', (req, res)=>{
  res.send("Welcome to your server")
  })
  app.post("/user", async(res,req) =>{
    const user = new userdetails(res.body);
    // console.log(user);  
    try {
      await user.save();
      req.send(user);
    } catch (error) {
      // console.log(error);

    }
    })
    app.get("/user", async(res,req) =>{
      const user = await userdetails.find({});
      try {
        // await user.save();
        req.send(user);
      } catch (error) {
        // console.log(error);
  
      }
      })
  
  app.listen(process.env.PORT || 4000, () => {
  console.log(`🚀  Server ready at port ${process.env.PORT || 4000}`);
});

app.post("/login", async(res,req) =>{
  const user= await userdetails.findOne({mob:res.body.mob});
  if (user && user.pass===res.body.pass){
    req.send(true);}
    else{
      req.send(false);}

 });

  
