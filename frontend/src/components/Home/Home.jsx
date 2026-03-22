
import React from 'react';
import { useState, useEffect } from 'react';
import "./Home.css";
import "./IniciarSesion.css";
import HomeMadeLogo from '../../assets/imgs/homemade.png';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../services/usuarios';

export const Home = ({ nombre }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        email: "",
        password: "",
        direccion: "",
    });
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        try {
            createUser(form.nombre, form.apellido, form.email, form.password)
        } catch (error) {
            console.log(error);
        }
        console.log(form);
    }
    return (
        <div className="iniciarSesionPapa2">
            <header>
                <nav className="nav2">
                    <ul className="top-menu2">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Profesional</a></li>
                        <li><a href="#">Comunidad</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                    <div className="capsula-botones">
                        <div className="buttons2">
                            <button onClick={() => navigate("/")} className="registrarse">Iniciar Sesión</button>
                            <button onClick={() => navigate("/registro")} id="registra">Registrarse</button>
                        </div>
                    </div>
                </nav>
                <div className="logo2">
                    <img src={HomeMadeLogo} alt="Logo de la compañía" />
                </div>
            </header>
            <main>
                <div className="login2">
                    <form onSubmit={handleSumbit}>
                        <h4 className="registrarUsuario">Registrar Usuario</h4>

                        <input onChange={handleFormChange} type="text" id="nombre" name="nombre" required placeholder="Ingresa tu nombre" />

                        <input onChange={handleFormChange} type="text" id="apellido" name="apellido" required placeholder="Ingresa tu apellido" />
                        <input onChange={handleFormChange} type="text" id="usuario" name="usuario" required placeholder="Ingresa tu usuario" />
                        <input onChange={handleFormChange} type="email" id="email" name="email" required placeholder="Ingresa tu email" />
                        <input onChange={handleFormChange} type="password" id="password" name="password" required placeholder="Ingresa tu contraseña" />
                        <input onChange={handleFormChange} type="text" id="direccion" name="direccion" required placeholder="Ingresa tu direccion" />
                        <button type="submit" className="regis">Registrarse</button>
                        <button onClick={() => navigate("/RegistroProfesional")} className="soyProfesional" type="submit">Soy un
                            Profesional</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

