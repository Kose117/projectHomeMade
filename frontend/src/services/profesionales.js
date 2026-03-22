import axios from "axios";


const api_ = "http://localhost:8000"

export const retrieveProfesionales = async () => {
    try {
        const { data } = await axios.get(`${api_}/getPros`);
        return data;
    } catch (error) {
        return error.response;
    }
}

export const getProfesionalById = async (id) => {
    try {
        const { data } = await axios.get(`${api_}/getPro/${id}`);
        return data;
    } catch (error) {
        return error.response;
    }
}