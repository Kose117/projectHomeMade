import axios from "axios";
import Cookie from 'js-cookie';


const api_ = "http://localhost:8000"


export const createReserva = async (id_usuario, id_profesional, costo, descripcion_gasto, monto_gasto, fecha_gasto) => {
    try {
        const response = await axios.post(`${api_}/reservas`, { id_usuario, id_profesional, costo, descripcion_gasto, monto_gasto, fecha_gasto });
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error("Error al crear la reserva:", error);
        throw error;
    }
};

export const getAllReservaByUsuId = async (usuarioId) => {
    console.log(`${api_}/getAllReservaByUsuId/${usuarioId}`)
    try {
        const response = await axios.get(`${api_}/getAllReservaByUsuId/${8}`);
        console.log(response.data)
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error("Error al obtener las reservas:", error);
        throw error;
    }
};
export const getAllReservaByProId = async (id_profesional) => {
    try {
        const response = await axios.get(`${api_}/reservas/profesional/${id_profesional}`);
        return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
        console.error("Error al obtener las reservas:", error);
        throw error;
    }
};