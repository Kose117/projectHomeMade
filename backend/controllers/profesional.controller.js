import jwt from 'jsonwebtoken';
import { secretKey } from './authMiddleware.js';
import Profesional from '../models/profesional.model.js';


// Create a new Usuario
export const createProfesional = async (req, res) => {
    try {
        const profesional = await Profesional.create(req.body);
        res.status(201).json(profesional);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create Profesional' });
    }
};

// Get all Usuarios
export const getProfesionales = async (req, res) => {
    try {
        const profesionales = await Profesional.findAll();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Profesionales' });
    }
};

// Get a single Usuario by ID
export const getProfesionalByCreds = async (req, res) => {

    try {
        const profesional = await Profesional.findOne({
            where: {
                correo_profesional: req.body.correo_profesional,
                contrasena_profesional: req.body.contrasena_profesional
            }
        });
        if (!profesional) {
            res.status(404).json({ error: 'Profesional not found' });
        } else {
            const token = jwt.sign(
                { id: profesional.id_profesional },
                secretKey,
                { expiresIn: '4h' }
            );
            res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Profesional' });
        console.log(error);
    }
};
export const getProfesionalById = async (req, res) => {

    try {
        const { id } = req.params
        const profesional = await Profesional.findByPk(id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Profesional' });
        console.log(error);
    }
};

// authentica token 
export const auth = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        const profesional = await Profesional.findByPk(decoded.id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve Profesional' });
    }
};