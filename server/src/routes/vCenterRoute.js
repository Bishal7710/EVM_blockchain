import express from "express";
import { registerVCenter } from "../controllers/vCenterController.js";

const router = express.Router();

router.post("/reg_vcenter", registerVCenter);

export default router;