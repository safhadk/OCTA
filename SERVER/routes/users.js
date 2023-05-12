import express from "express";
import { vehicles ,VehicleDetails} from "../controller/user.js";

const router = express.Router();

// router.post('/',vehicles)
router.get('/',VehicleDetails)

export default router;
