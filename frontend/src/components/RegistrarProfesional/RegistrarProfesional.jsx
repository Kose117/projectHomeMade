
import React from 'react';
import { useState, useEffect } from 'react';
import "./RegistrarProfesional.css";
import { Header } from '../Common/Header/Header';
import HomeMadeLogo from './HomeMade.png';
import { useNavigate } from 'react-router-dom';

export const RegistrarProfesional = ({ nombre }) => {
    /*const [hola, setHola] = useState("hola");
    useEffect(() => {
        console.log("Hola");
    }, [/*Puedo usar funciones o fetch data*//*]);*/
    const navigate = useNavigate();
    return (
        <div className='RegistrarProfesional'>
            <Header />
            <main>
                <div id="login">
                    <h1 id="RegistrarProfesional">Registrar Profesional</h1>
                    <form>
                        <div className="form-group">
                            <label for="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required placeholder="Ingresa tu nombre" />
                        </div>
                        <div className="form-group">
                            <label for="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" required placeholder="Ingresa tu apellido" />
                        </div>
                        <div className="form-group">
                            <label for="usuario">Usuario:</label>
                            <input type="text" id="usuario" name="usuario" required placeholder="Ingresa tu usuario" />
                        </div>
                        <div className="form-group">
                            <label for="email">Correo:</label>
                            <input type="email" id="email" name="email" required placeholder="Ingresa tu email" />
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña:</label>
                            <input type="password" id="password" name="password" required placeholder="Ingresa tu contraseña" />
                        </div>
                        <div className="form-group">
                            <label for="direccion">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" required placeholder="Ingresa tu direccion" />
                        </div>
                        <div className="form-group">
                            <label for="categoria">Categoria:</label>
                            <select id="categoria" name="categoria" required>
                                <option value="">Selecciona una categoría</option>
                                <option value="Categoria 1">Pintor</option>
                                <option value="Categoria 2">Aseo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="ca">Dirección:</label>
                            <input type="text" id="direccion" name="direccion" required placeholder="Ingresa tu direccion" />
                        </div>
                        <div className="form-group">
                            <button onClick={() => navigate("/perfilProfesional")} type="submit" className="regis">Registrarse</button>
                            <button onClick={() => navigate("/registro")} className="soyProfesional" type="submit">Usuario</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

