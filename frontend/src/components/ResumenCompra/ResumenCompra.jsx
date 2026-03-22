
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "./ResumenCompra.css";
import HomeMadeLogo from './HomeMade.png';
import { getProfesionalById } from '../../services/profesionales';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ResumenCompra = ({ datos }) => {
    const user = useSelector((state) => state.user);
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const { id } = useParams();
    const firstLoad = useRef(true);
    const fetchData = async () => {
        const res = await getProfesionalById(id);
        setData(res);
    };
    useEffect(() => {
        if (firstLoad.current) {
            fetchData();
            firstLoad.current = false;
        }
        if (data !== null) {
            setLoad(false);
            console.log(data);
        }
    }, [data]);
    if (load) {
        return (
            <div className="loading">
                <img src={HomeMadeLogo} alt="Logo de la compañía" />
            </div>
        )
    }
    console.log(datos);
    return (
        <div className='resumenCompras'>
            <nav>
                <div id="logo">
                    <img src={HomeMadeLogo} alt="Logo de la compañía" />
                </div>
            </nav>
            <main>
                <div className="main">
                    <div className="resumen">
                        <div className="icono">
                            <i className="uil uil-paint-tool"></i>
                        </div>
                        <h2>{data?.titulo_profesional + " ....................................... $30.000"} </h2>
                        <h2>{user.name}</h2>
                        <h2>{datos.fecha}</h2>
                        <h2>{datos.direccion}</h2>
                        <a href="pagoExitoso.html">
                            <button>Continuar</button>
                        </a>
                    </div>
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
            <script>
                flatpickr("#input[type=datetime-local]", { });
            </script>
        </div>
    );
};

