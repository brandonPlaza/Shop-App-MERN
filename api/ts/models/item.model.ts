import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:{type: String,required: true,unique: false,trim: true,minlength: 3},
    description:{type: String,required: true,unique: false,trim: true,minlength: 3},
    price:{type: Number,required: true},
}, {
    timestamps: true,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;