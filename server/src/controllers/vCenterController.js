import { ErrorHandler } from "../utils/utilityClass.js";
import { vCenter } from "../models/vCenterModel.js";

export const registerVCenter = async(req, res, next) => {
    try {
        const { vCname, vCemail, vCphoneNo, vCenterID, vCddress } = req.body;
        // console.log(email, name, phoneNo, voterID, address)

        if (!vCname || !vCemail || !vCphoneNo || !vCenterID || !vCddress) {
            return next(new ErrorHandler("Please enter all fields", 400));
        }

        let vcenter = await vCenter.findOne({ voterID });

        if (vcenter) {
            return next(new ErrorHandler("Voting Center already exist!", 409));
        }

        vcenter = await vCenter.create({
            vCname,
            vCemail,
            vCphoneNo,
            vCenterID,
            vCddress
        });

        return res.status(201).json({
            success: true,
            vcenter,
            message: `Registration Successfull`,
        });
    } catch (e) {
        // console.log(e);
        return next(new ErrorHandler("Registration Unsuccessfull", 500));
    }
};