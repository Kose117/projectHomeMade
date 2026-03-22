import express from "express";
import { auth, createUsuario, getUsuarioByCreds, getUsuarioById, getUsuarios } from "../controllers/usuario.controller.js";

const router = express.Router();

// Get
router.post("/createUser", createUsuario)
router.get("/getUsers", getUsuarios)
router.post("/getUserByCreds", getUsuarioByCreds)
router.get("/getUser/:id", getUsuarioById)
router.get("/auth", auth)

export default router;