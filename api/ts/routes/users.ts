import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
  User.find()
    .then((users: any) => res.json(users))
    .catch((err: string) => res.status(400).json('Error ' + err))
});

router.route('/register').post(async (req,res)=>{
  // const userName = req.body.userName;
  // const email = req.body.email;
  // const password = req.body.password;
  // const newUser = new User({userName});

  // newUser.save()
  //   .then(() => res.json('The user has been added!'))
  //   .catch((err: string) => res.status(400).json('Error ' + err))
  try{
    console.log("Before assignment")
    const {userName, email, password} = req.body;
    console.log("After assignment")

    if(!(userName && password && userName)){
      console.log("Input Invalid")
      res.status(400).send("One or more input fields are not given");
    }

    const existingUser = await User.findOne({email});

    if(existingUser){
      return res.status(409).send("User already exists. Would you like to login?");
    }

    let encryptedPassword = await bcrypt.hash(password, 15);
    
    const user = await User.create({
      userName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    })
    const token = jwt.sign(
      {user_id: user._id, email},
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    return res.status(200).json(user.token);
  }catch(error){
    console.log(error);
  }
});

router.route('/login').post(async (req,res)=>{
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("You are missing required fields");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
