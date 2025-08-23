import express from "express";

import { getStudent,newStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get('/',getStudent);

router.post('/',newStudent);

export default router;