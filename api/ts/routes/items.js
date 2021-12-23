"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let Item = require('../models/item.model');
router.route('/').get((req, res) => {
    Item.find()
        .then((items) => res.json(items))
        .catch((error) => res.status(400).json('Error ' + error));
});
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const newItem = new Item({ name, description, price });
    newItem.save()
        .then(() => res.json('The item has been added!'))
        .catch((error) => res.status(400).json('Error ' + error));
});
