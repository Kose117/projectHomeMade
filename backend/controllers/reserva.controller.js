import jwt from 'jsonwebtoken';
import { secretKey } from './authMiddleware.js';
import Reserva from '../models/reserva.model.js';
import Profesional from '../models/profesional.model.js';
import { Sequelize } from 'sequelize';


// Create a new Usuario
export const createReserva = async (req, res) => {
    try {
        const reserva = await Reserva.create(req.body);
        res.status(201).json(reserva);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create reserva' });
    }
};

// Get all Usuarios
/*export const getAllReservaByUsuId = async (req, res) => {
    try {
        const {id}=req.params;
        const reservas = await Reserva.findAll({
            include: [
                {
                    model: Profesional,
                    attributes: [],
                    where:{
                        id_profesional:Sequelize.col('Reserva.id_profesional')
                    }
                }
            ],
            where:{
                id_usuario:id
            },
        });
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve reservas' });
    }
};*/

export const getAllReservaByUsuId = async (req, res) => {
    const { id } = req.params;
    const Reservas = await Reserva.findAll({
        where: {
            id_usuario: id
        },
        include:[{
            model: Profesional,
            required: true,
            where: {
                id_profesional: Sequelize.col('Reservas.id_profesional')
            }
            
        }]


    });
    res.status(200).json(Reservas);
};


export const getAllReservaByProId = async (req, res) => {
    try {
        const { id } = req.params;
        const reservas = await Reserva.findAll({
            where: {
                id_profesional: id
            }
        });
        res.status(200).json(reservas);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve reservas' });
    }
};

export const getReservaById = async (req, res) => {

    try {
        const { id } = req.params
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            res.status(404).json({ error: 'reserva not found' });
        } else {
            const token = jwt.sign(
                { id: reserva.id_usuario },
                secretKey,
                { expiresIn: '4h' }
            );
            res.status(200).json({ token });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve reserva' });
        console.log(error);
    }
};

// authentica token 
export const auth = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretKey);
        const reserva = await Reserva.findByPk(decoded.id);
        res.status(200).json(reserva);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve reserva' });
    }
};