import mongoose, { Schema } from "mongoose";
import validator from "validator";

const voterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter name"],
    },
    voterID: {
        type: String,
        required: [true, "please enter card id"],
        unique: [true, "Card ID already exist"],
    },
    phoneNo: {
        type: String,
        required: [true, "please enter mobile number"],
        unique: [true, "mobile number already exist"],
        select: false,
    },
    address: {
        type: String,
        required: [true, "please enter address"],
    },
    email: {
        type: String,
        required: [true, "please enter email"],
        unique: [true, "email already exist"],
        validate: validator.isEmail,
    },
}, { timestamps: true });

export const voter = mongoose.model("voter", voterSchema);