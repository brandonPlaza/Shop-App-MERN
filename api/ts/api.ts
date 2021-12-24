import express from 'express';
const router = express.Router();

const auth = require("./middleware/auth");

router.get("/", function(req,res,next){
    res.send("The API is working 100%");
});

router.get("/home", auth, function(req,res,next){
    res.send("Welcome User");
});

module.exports = router;