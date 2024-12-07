import mongoose, { Schema } from "mongoose";
import validator from "validator";

const vCenterSchema = new mongoose.Schema({

    vCname: {
        type: String,
        required: [true, "please enter name"],
    },
    vCenterID: {
        type: String,
        required: [true, "please enter card id"],
        unique: [true, "Card ID already exist"],
    },
    vCphoneNo: {
        type: String,
        required: [true, "please enter mobile number"],
        unique: [true, "mobile number already exist"],
        select: false,
    },
    vCddress: {
        type: String,
        required: [true, "please enter address"],
    },
    vCemail: {
        type: String,
        required: [true, "please enter email"],
        unique: [true, "email already exist"],
        validate: validator.isEmail,
    },
}, { timestamps: true });

export const vCenter = mongoose.model("vCenter", vCenterSchema);