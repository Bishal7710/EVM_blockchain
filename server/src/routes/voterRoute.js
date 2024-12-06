import express from "express";
import { registerVoter } from "../controllers/voterController.js";

const router = express.Router();

router.post("/reg_voter", registerVoter);

export default router;