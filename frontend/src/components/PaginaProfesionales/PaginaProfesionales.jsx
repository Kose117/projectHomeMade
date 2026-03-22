
import React from 'react';
import { useState, useEffect } from 'react';
import "./PaginaProfesionales.css";
import HomeMadeLogo from './HomeMade.png';
import { useNavigate } from 'react-router-dom';
import { Header } from '../Common/Header/Header';
import { retrieveProfesionales } from '../../services/profesionales';
import { useRef } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";



export const PaginaProfesionales = ({ nombre }) => {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const firstLoad = useRef(true);
    const navigate = useNavigate();
    useEffect(() => {
        if (firstLoad.current) {
            fetchData();
            firstLoad.current = false;
        }
        if (data !== null) {
            setLoad(false);
        }
    }, [data]);
    const fetchData = async () => {
        const res = await retrieveProfesionales();
        setData(res);
    };


    if (load) {
        return (
            <div className="loading">
                <img src={HomeMadeLogo} alt="Logo de la compañía" />
            </div>
        )
    }
    return (
        <div className='Profes'>
            <Header />
            <main>
                <div className="container">
                    <div className="left">
                        <div className="form-container">
                            <div className="form-item">
                                Tipo de Servicio
                                <select>
                                    <option>Jardinero</option>
                                </select>
                            </div>
                            <div className="form-item">
                                Distancia Máxima
                                <select>
                                    <option>20 km</option>

                                </select>
                            </div>
                            <div className="form-item">
                                Disponibilidad
                                <select>
                                    <option>Inmediata</option>

                                </select>
                            </div>
                            <div className="form-item">
                                Verificado
                                <select>
                                    <option>N/A</option>

                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        {
                            data?.map((profesional) => {
                                const stars = () => {
                                    let stars = [];
                                    for (let i = 0; i < profesional.calificacion_profesional; i++) {
                                        stars.push(<IoStarSharp />);
                                    }
                                    return stars;
                                }
                                return (
                                    <div className="card">
                                        <div className="profile-section">
                                            <img src={profesional.ruta_imagen} alt="Pepito Ovalle" className="profile-pic" />

                                            <div className="info">
                                                <h2>{profesional.nombre_profesional + " " + profesional.apellido_profesional}</h2>
                                                <p>{"Titulo: " + profesional.categoria_profesional}</p>
                                                <p>{"Sub-categoría: " + profesional.subcategoria_profesional}</p>
                                            </div>
                                        </div>
                                        <div className="address-block">
                                            
                                            <div className="actions">
                                                <div className="box">
                                                <a onClick={() => navigate(`/agendar/${profesional.id_profesional}`)}>
                                                    <FaCalendarAlt />
                                                </a>
                                                </div>
                                                <div className="box">
                                                <a href="chats.html">
                                                    <AiOutlineMessage />
                                                </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating-box">
                                            <div className="stars">
                                            { stars()}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

