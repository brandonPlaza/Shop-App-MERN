import express from 'express';

var router = express.Router();

router.get("/", function(req,res,next){
    res.send("The API is working 100%");
});

module.exports = router;