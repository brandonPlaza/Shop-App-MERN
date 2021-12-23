import express from 'express'

const router = express.Router();
let Item = require('../models/item.model');

router.route('/').get((req,res) => {
    Item.find()
        .then((items: any) => res.json(items))
        .catch((error:string) => res.status(400).json('Error ' + error))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    const newItem = new Item({name, description, price})

    newItem.save()
        .then(()=>res.json('The item has been added!'))
        .catch((error:string) => res.status(400).json('Error ' + error))
});

module.exports = router;