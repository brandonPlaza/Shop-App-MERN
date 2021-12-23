import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

const User = mongoose.model('User', userShema);

module.exports = User;