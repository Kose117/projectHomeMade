import express from "express";
import { getAllReservaByProId, getAllReservaByUsuId } from "../controllers/reserva.controller.js";

const router = express.Router();

// Get
router.get("/getAllReservaByUsuId/:id", getAllReservaByUsuId)
router.get("/getAllReservaByProId/:id", getAllReservaByProId)

export default router;