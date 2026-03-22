
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import "./Historial.css";
import HomeMadeLogo from './HomeMade.png';
import { IoStarSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Header } from '../Common/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { getAllReservaByUsuId } from '../../services/reservas.js';


export const Historial = () => {
    const chkUser = useSelector((state) => state.user);
    const firsLoad = useRef(true)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (firsLoad.current) {
            firsLoad.current = false
            fetchData(chkUser.id)
        }
        if (data !== null) {
            console.log(data)
            setLoading(false)
        }
    }, [data])


    const fetchData = async (id) => {
        try {
            const response = await getAllReservaByUsuId(id)
            setData(response)
        } catch (error) {
            console.error(error)
        }
    }
    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className='historial'>
            <Header />
            <main>
                <div className="container">
                    <div className="middle">

                        <div className="header__wrapper">
                            <div className="right__col">

                                <div className="profile-sections">
                                    <div className="grid-resena">
                                        {
                                            data.map((reserva) => {
                                                return (
                                                    <div className="review">
                                                        <div className="contendor-img">

                                                            <img src="../assets/imgs/pintor2.jpg" alt="Imagen de reseña" />
                                                        </div>
                                                        <div className="contenti">
                                                            <h3> {reserva.Profesional.nombre_profesional + " " + reserva.Profesional.apellido_profesional} </h3>
                                                            <div id="negrilla">
                                                                <p style={{ color: 'black' }}>Servicio: </p>
                                                                <p style={{ color: 'black' }}> {reserva.fecha_gasto} </p>
                                                                <p style={{ color: 'black' }}> {reserva.Profesional.subcategoria_profesional} </p>
                                                            </div>
                                                            <p></p>
                                                        </div>
                                                        <button className="comprobante">Imprimir comprobante</button>
                                                        <a onClick={() => navigate(`/comentario/${reserva.Profesional.id_profesional}`)}>
                                                            <button className="resena">Hacer reseña</button>
                                                        </a>
                                                        <div className="rating-box">
                                                            <div className="stars">
                                                                <IoStarSharp />
                                                                <IoStarSharp />
                                                                <IoStarSharp />
                                                                <IoStarSharp />
                                                                <IoStarSharp />
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="../js/historial.js"></script>
            </main>
        </div>
    );
};

