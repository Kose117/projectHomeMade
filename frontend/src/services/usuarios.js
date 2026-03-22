import axios from 'axios';
import Cookie from 'js-cookie';

const api_ = "http://localhost:8000"


export const login = async (correo_usuario, contrasena_usuario) => {
    try {
        const { data } = await axios.post(`${api_}/getUserByCreds`, { correo_usuario, contrasena_usuario });
        console.log(data.token);
        return data.token;
    } catch (error) {
        return error.response;
    }

}

export const authToken = async (token) => {
    try {
        const response = await axios.get(`${api_}/auth`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const createUser = async (nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario) => {
    try {
        const { data } = await axios.post(`${api_}/createUser`, { nombre_usuario, apellido_usuario, correo_usuario, contrasena_usuario });
        console.log(data);
        return data;
    } catch (error) {
        return error.response;
    }
}