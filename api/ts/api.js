"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const auth = require("./middleware/auth");
router.get("/", function (req, res, next) {
    res.send("The API is working 100%");
});
router.get("/home", auth, function (req, res, next) {
    res.send("Welcome User");
});
module.exports = router;
