"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let User = require('../models/user.model');
router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error ' + err));
});
router.route('/add').post((req, res) => {
    const userName = req.body.userName;
    const newUser = new User({ userName });
    newUser.save()
        .then(() => res.json('The user has been added!'))
        .catch((err) => res.status(400).json('Error ' + err));
});
module.exports = router;
