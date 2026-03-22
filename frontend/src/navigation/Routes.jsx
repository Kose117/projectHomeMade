
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agendar from '../components/Agendar/Agendar';
import { Home } from '../components/Home/Home';
import { IniciarSesion } from '../components/Home/IniciarSesion';
import { MetodoPago } from '../components/MetodoPago/MetodoPago';
import { PaginaProfesionales } from '../components/PaginaProfesionales/PaginaProfesionales';
import { PagoExitoso } from '../components/PagoExitoso/PagoExitoso';
import { Perfil } from '../components/Perfil/Perfil';
import { RegistrarProfesional } from '../components/RegistrarProfesional/RegistrarProfesional';
import { ResumenCompra } from '../components/ResumenCompra/ResumenCompra';
import Bienvenida from '../components/Bienvenida/Bienvenida';
import Calendario from '../components/Calendario/Calendario';
import Chats from '../components/Chats/Chats';
import Comentarios from '../components/Comentarios/Comentarios';
import Comunidad from '../components/Comunidad/Comunidad';
import ElegirPagoComponent from '../components/Elegirpago/Elegirpago';
import Feed from '../components/Feed/Feed';
import { Historial } from '../components/Historial/Historial';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { authToken } from '../services/usuarios.js';
import PrivateRoutes from '../utils/privateRoute.js';
import Cookie from 'js-cookie';
import { login } from '../redux/userSlice.js';

const Routing = () => {
    const [auth, setAuth] = useState(false);
    const firstLoad = useRef(true)
    const [data, setData] = useState({
        direccion: '',
        fecha: '',
    });
    const dispatch = useDispatch();

    const verifyToken = async () => {
        const res = await authToken(Cookie.get("token"));
        if (res?.status === 200) {
            dispatch(login(res.data));
            setAuth(true);
        } else {
            setAuth(false);
        }
    };

    const handleChanges = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (Cookie.get("token") && firstLoad.current) {
            verifyToken();
            firstLoad.current = false;
        }
    }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={auth ? <Bienvenida /> : <IniciarSesion />} />
                <Route path="/registro" element={auth ? <Bienvenida /> : <Home />} />
                <Route path="/RegistroProfesional" element={<RegistrarProfesional />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/pago/:id" element={<MetodoPago />} />
                    <Route path="/paginaProfesionales" element={<PaginaProfesionales />} />
                    <Route path="/pagoExitoso" element={<PagoExitoso />} />
                    <Route path="/perfilProfesional" element={<Perfil />} />
                    <Route path="/ResumCompra/:id" element={<ResumenCompra datos={data} />} />
                    <Route path="/agendar/:id" element={<Agendar handleChanges={handleChanges} />} />
                    <Route path="/bienvenida" element={<Bienvenida />} />
                    <Route path="/calendario" element={<Calendario />} />
                    <Route path="/chat" element={<Chats />} />
                    <Route path="/comentario/:id" element={<Comentarios />} />
                    <Route path="/comunidad" element={<Comunidad />} />
                    <Route path="/elegirpago/:id" element={<ElegirPagoComponent />} />
                    <Route path="/feed" element={<Feed />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
