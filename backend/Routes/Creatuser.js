const express = require('express')
const cors = require('cors'); 
const { body, validationResult } = require('express-validator');
const bcrypt =require("bcryptjs")
const jwt =require("jsonwebtoken")
const router =express.Router()
const User =require('../models/User')
const mongoose =require('mongoose')
const secret="ashvjdasdkfbsdkjfbkj";
const url = "mongodb://gofood:Ani052003@ac-uux1ybs-shard-00-00.nylcfat.mongodb.net:27017,ac-uux1ybs-shard-00-01.nylcfat.mongodb.net:27017,ac-uux1ybs-shard-00-02.nylcfat.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-voaca9-shard-0&authSource=admin&retryWrites=true&w=majority";
let corsOptions = { 
    origin: [ 'http://localhost:5500', 'http://localhost:3000' ] 
}; 
router.get('/', (req, res) => {
    res.send("GET Request Called")
})

router.get('/creatuser', (req, res) => {
    res.send("GET Request Called jatin")

})

router.post('/createuser', (req, res) =>{
  
    console.log('req ==>',req.body)
    
mongoose.connect(url, { useNewUrlParser: true }, async (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      // Handle the error appropriately, for example, send an error response
      res.status(500).json({ success: false, error: 'Error connecting to the database' });
    } else {
      // Assuming `users` is the name of your collection
      const fetched_data = await mongoose.connection.db.collection('users');
  
      // Assuming req.body contains the data you want to insert
      fetched_data.insertOne(req.body, (err, data) => {
        if (err) {
          console.error('Error inserting data:', err);
          // Handle the error appropriately, for example, send an error response
          res.status(500).json({ success: false, error: 'Error inserting data' });
        } else {
          console.log('User added successfully:', data);
        //   res.json({ success: true });
        }
      });
    }
  });
  res.json({success:true});
});

router.get("/creatuser"
,async(req,res)=>{
    console.log('req ==>',req)
    console.log('res ==>',res)
    res.send('jatin')
    const err = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({errors: errors.array()}) }
     const salt = bcrypt.genSalt(5);
     const secpassword =bcrypt.hash(req.body.password,salt);
try {
    await User.create({
        name:req.body.name,
        password:secpassword,
        email:req.body.email,
        location:req.body.location
    })
   res.json({success:true})
} catch (error) {
    console.log("enter valid credentials");
    res.json({success:false})
}
});

router.post("/loginuser", async function(req, res){ 
  try { 
      // check if the user email exists 
      const user = await User.findOne({email:req.body.email }); 
      if (user) { 
        //check if password matches  
        if (req.body.password === user.password) { 
          let data={
            userid:req.body.id ,
          }
          const token = jwt.sign(data, secret); 
          res.json({success:true,authtoken:token})
          return res.status(400).json({ success:true ,authtoken});
        } else { 
          return res.status(400).json({ error: "password doesn't match" }); 
        } 
      } else { 
        res.status(400).json({ error: "User doesn't exist" }); 
      } 
    } catch (error) { 
      res.status(400).json({ error:'err' }); 
    } 
});
module.exports = router;
