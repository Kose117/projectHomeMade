import express from "express";
import { auth, createProfesional, getProfesionalByCreds, getProfesionalById, getProfesionales } from "../controllers/profesional.controller.js";

const router = express.Router();

// Get
router.post("/createPro", createProfesional)
router.get("/getPros", getProfesionales)
router.post("/getProByCreds", getProfesionalByCreds)
router.get("/getPro/:id", getProfesionalById)

export default router;