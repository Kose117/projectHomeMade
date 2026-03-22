import jwt from 'jsonwebtoken';
import { secretKey } from './authMiddleware.js';
import Usuario from '../models/usuario.model.js';


// Create a new Usuario
export const createUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Usuario' });
    }
};

// Get all Usuarios
export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Usuarios' });
    }
};

// Get a single Usuario by ID
export const getUsuarioByCreds = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                correo_usuario: req.body.correo_usuario,
                contrasena_usuario: req.body.contrasena_usuario
            }
        });
        if (!usuario) {
            res.status(404).json({ error: 'Usuario not found' });
        } else {
            const token = jwt.sign(
                { id: usuario.id_usuario },
                secretKey,
            );
            res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Usuario' });
        console.log(error);
    }
};
export const getUsuarioById = async (req, res) => {

    try {
        const { id } = req.params
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            res.status(404).json({ error: 'Usuario not found' });
        } else {
            const token = jwt.sign(
                { id: usuario.id_usuario },
                secretKey,
            );
            res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Usuario' });
        console.log(error);
    }
};

// authentica token 
export const auth = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        const usuario = await Usuario.findByPk(decoded.id);
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Usuario' });
    }
};