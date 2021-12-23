"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const itemSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: false, trim: true, minlength: 3 },
    description: { type: String, required: true, unique: false, trim: true, minlength: 3 },
    price: { type: Number, required: true },
}, {
    timestamps: true,
});
const Item = mongoose_1.default.model('Item', itemSchema);
module.exports = Item;
