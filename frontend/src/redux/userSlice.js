import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    apellido: "",
    email: "",
    id: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.name = action.payload.nombre_usuario;
            state.apellido = action.payload.apellido_usuario;
            state.email = action.payload.correo_usuario;
            state.id = action.payload.id_usuario;
        },
        logout: (state) => {
            state.name = "";
            state.apellido = "";
            state.email = "";
            state.id = "";
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;