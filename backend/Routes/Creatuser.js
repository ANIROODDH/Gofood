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
router.get('/loginuser',(req,res)=>{
  res.send("logined");
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

// router.get("/createuser"
// ,async(req,res)=>{
//     console.log('req ==>',req)
//     console.log('res ==>',res)
//     res.send('jatin')
//     const err = validationResult(req);
//     if (!result.isEmpty()) {
//       return res.status(400).json({errors: errors.array()}) }
//     //  const salt = bcrypt.genSalt(5);
//     //  const secpassword =bcrypt.hash(req.body.password,salt);
//     const salt = await bcrypt.genSalt(10); // Use await and specify the number of rounds (e.g., 10)
// const secpassword = await bcrypt.hash(req.body.password, salt);

// try {
//     await User.create({
//         name:req.body.name,
//         password:secpassword,
//         email:req.body.email,
//         location:req.body.location
//     })
//     res.json({success:true})
//     // console.log();
//     console.log(name);
//     // res.redirect('/');
// } catch (error) {
//     console.log("enter valid credentials");
//     res.json({success:false})
// }
// });


//******************************** */
// router.post("/createuser", async (req, res) => {
//   try {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const salt = await bcrypt.genSalt(10); // Use await and specify the number of rounds (e.g., 10)
//     const secpassword = await bcrypt.hash(req.body.password, salt);

//     await User.create({
//       name: req.body.name,
//       password: secpassword,
//       email: req.body.email,
//       location: req.body.location
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error("Error during user creation:", error);
//     res.status(500).json({ success: false });
//   }
// });




router.post("/loginuser", async function(req, res) { 
  try { 
    // Check if the user email exists 
    const user = await User.findOne({ email: req.body.email }); 
    if (user) { 
      // Check if password matches using bcrypt.compare
      // const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      
      // if (passwordMatch) { 
        if(req.body.password=== user.password){
        // Password matches, generate a token
        const data = {
          userid: user.id,
        };
        const token = jwt.sign(data, secret);
        res.status(200).json({ success: true, authtoken: token });
      } else{
        // Password doesn't match
        res.status(401).json({ error: "Unauthorized - Password doesn't match" });
      }
    } else { 
      // User doesn't exist
      res.status(404).json({ error: "User not found" });
    } 
  } catch (error) { 
    // Server error
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  } 
});

module.exports = router;
