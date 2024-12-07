import { ErrorHandler } from "../utils/utilityClass.js";
import { Voter } from "../models/voterModel.js";

export const registerVoter = async(req, res, next) => {
    try {
        const { name, email, phoneNo, voterID, address } = req.body;
        // console.log(email, name, phoneNo, voterID, address)

        if (!name || !email || !phoneNo || !voterID || !address) {
            return next(new ErrorHandler("Please enter all fields", 400));
        }

        let voter = await Voter.findOne({ voterID });

        if (voter) {
            return next(new ErrorHandler("Voter already exist!", 409));
        }

        voter = await Voter.create({
            name,
            email,
            phoneNo,
            voterID,
            address,
        });

        return res.status(201).json({
            success: true,
            voter,
            message: `Registration Successfull`,
        });
    } catch (e) {
        // console.log(e);
        return next(new ErrorHandler("Registration Unsuccessfull", 500));
    }
};