"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userShema = new mongoose_1.default.Schema({
    userName: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    email: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    password: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    token: { type: String },
}, {
    timestamps: true,
});
const User = mongoose_1.default.model('User', userShema);
module.exports = User;
