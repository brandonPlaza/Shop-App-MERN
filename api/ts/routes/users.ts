import express from 'express'

const router = express.Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
  User.find()
    .then((users: any) => res.json(users))
    .catch((err: string) => res.status(400).json('Error ' + err))
});

router.route('/register').post((req,res)=>{
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const newUser = new User({userName});

  newUser.save()
    .then(() => res.json('The user has been added!'))
    .catch((err: string) => res.status(400).json('Error ' + err))
})

module.exports = router;
