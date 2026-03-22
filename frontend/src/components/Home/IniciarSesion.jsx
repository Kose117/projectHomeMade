
import React from 'react';
import { useState, useEffect } from 'react';
import "./Home.css";
import "./IniciarSesion.css";
import HomeMadeLogo from '../../assets/imgs/homemade.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/usuarios';
import { Header } from '../Common/Header/Header';
import Cookies from 'js-cookie';


export const IniciarSesion = ({ nombre }) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Hola");
    }, []);
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        try {
            const usuario = await login(form.email, form.password)
            Cookies.set('token', usuario, { expires: 1, secure: true });
            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="iniciarSesionPapa2">
            <Header />
            <main>
                <div className="logo2">
                    <img src={HomeMadeLogo} alt="Logo de la compañía" />
                </div>
                <div className="login2">
                    <form onSubmit={handleSumbit}>
                        <h1 className="texto2">Iniciar Sesión</h1>
                        <input onChange={handleFormChange} type="email" id="email" name="email" required placeholder="Ingresa tu correo"></input>
                        <input onChange={handleFormChange} type="password" id="password" name="password" required placeholder="Ingresa tu contraseña"></input>

                        <button type="submit" className="iniciarSesion">Iniciar Sesión</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

