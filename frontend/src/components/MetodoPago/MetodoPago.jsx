
import React from 'react';
import { useState, useEffect } from 'react';
import "./MetodoPago.css";
import tarjeta from './fondoTarjeta.png';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

export const MetodoPago = ({ nombre }) => {
    const navigate = useNavigate();
    const [tarjeta, setTarjeta] = useState({
        numero: '',
        nombre: '',
        mes: '',
        year: '',
        ccv: ''
    })
    const handleChanges = (e) => {
        setTarjeta({
            ...tarjeta,
            [e.target.name]: e.target.value
        })
    }
    const { id } = useParams();
    const tarjetita = () => {
        const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
        const formulario = document.querySelector('#formulario-tarjeta')
        btnAbrirFormulario.classList.toggle('active')
        formulario.classList.toggle('active')
    }
    const voltearTarjetita = () => {
        const tarjeta = document.querySelector('#tarjeta')
        tarjeta.classList.toggle('active')
    }
    return (
        <div className='MetodoP'>
            <header>
                <nav>
                    <div id="logo">
                        <a href="Feed.html">
                           
                        </a>
                    </div>

                </nav>
            </header>
            <div className="contenedor">
                <section className="tarjeta" id="tarjeta">
                    <div className="delantera">
                        <div className="logo-marca" id="logo-marca">
                        </div>
                        <img src="../assets/imgs/chip-tarjeta.png" className="chip" alt="" />
                        <div className="datos">
                            <div className="grupo" id="numero">
                                <p className="label">Número Tarjeta</p>
                                <p className="numero">{tarjeta.numero}</p>
                            </div>
                            <div className="flexbox">
                                <div className="grupo" id="nombre">
                                    <p className="label">Nombre Tarjeta</p>
                                    <p className="nombre">{tarjeta.nombre}</p>
                                </div>

                                <div className="grupo" id="expiracion">
                                    <p className="label">Expiracion</p>
                                    <p className="expiracion"><span className="mes">{tarjeta.mes}</span> / <span className="year">{tarjeta.year}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="trasera">
                        <div className="barra-magnetica"></div>
                        <div className="datos">
                            <div className="grupo" id="firma">
                                <p className="label">Firma</p>
                                <div className="firma">
                                    <p></p>
                                </div>
                            </div>
                            <div className="grupo" id="ccv">
                                <p className="label">CCV</p>
                                <p className="ccv">{tarjeta.ccv}</p>
                            </div>
                        </div>
                        <p className="leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem,
                            voluptates illo.</p>
                        <a href="#" className="link-banco">www.tubanco.com</a>
                    </div>
                </section>
                <div className="contenedor-btn">
                    <button onClick={() => tarjetita()} className="btn-abrir-formulario" id="btn-abrir-formulario">
                        <FaPlus />
                    </button>
                </div>
                <form action="" id="formulario-tarjeta" className="formulario-tarjeta">
                    <div className="grupo">
                        <label for="inputNumero">Número Tarjeta</label>
                        <input onChange={handleChanges} name='numero' type="number" id="inputNumero" maxlength="19" autocomplete="off" />
                    </div>
                    <div className="grupo">
                        <label for="inputNombre">Nombre</label>
                        <input onChange={handleChanges} name='nombre' type="text" id="inputNombre" maxlength="19" autocomplete="off" />
                    </div>
                    <div className="flexbox">
                        <div className="grupo expira">
                            <label for="selectMes">Expiracion</label>
                            <div className="flexbox">
                                <div className="grupo-select">
                                    <select onChange={handleChanges} name="mes" id="selectMes">
                                        <option disabled selected>Mes</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                                <div className="grupo-select">
                                    <select onChange={handleChanges} name="year" id="selectYear">
                                        <option disabled selected>Año</option>
                                        <option value="24">2024</option>
                                        <option value="25">2025</option>
                                        <option value="26">2026</option>
                                        <option value="27">2027</option>
                                        <option value="28">2028</option>
                                        <option value="29">2029</option>
                                        <option value="30">2030</option>
                                    </select>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                            </div>
                        </div>

                        <div className="grupo ccv">
                            <label for="inputCCV">CCV</label>
                            <input onClick={voltearTarjetita} onChange={handleChanges} name='ccv' type="text" id="inputCCV" maxlength="3" />
                        </div>
                    </div>
                    <a onClick={() => navigate(`/ResumCompra/${id}`)}>
                        <button type="button" className="btn-enviar">Continuar</button>
                    </a>
                </form>
            </div>
        </div>
    );
};

