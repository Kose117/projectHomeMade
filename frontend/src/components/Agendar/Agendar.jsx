// Agendar.jsx
import React, { useEffect, useState, useRef } from 'react';
import flatpickr from 'flatpickr';
import "./Agendar.css"
import homemadelogo from "../../assets/imgs/homemade.png";
import pintor2 from "../../assets/imgs/pintor2.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import { createReserva } from '../../services/reservas';
import { AiOutlineMessage } from "react-icons/ai";
import { getProfesionalById } from '../../services/profesionales';


const Agendar = ({ handleChanges }) => {
    const [formData, setFormData] = useState({
        categoria: '',
        subcategoria: '',
        tituloProfesional: '',
        ubicacion: '',
        fecha: '',
    });
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const { id } = useParams();
    const firstLoad = useRef(true);
    const navigate = useNavigate();
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
                <img src={homemadelogo} alt="Logo de la compañía" />
            </div>
        )
    }
    return (
        <div className="agendar">
            <nav>
                <div className="logo">
                    <img src={homemadelogo} alt="Logo de la compañía" />
                </div>
            </nav>
            <main>
                <h1 className="agendar-con">Vas a agendar una cita con: </h1>
                <div className="main">
                    <div className="info-profesional">
                        <div className="imagen-contenedor">
                            <img src={pintor2} alt="Foto del profesional" className="foto-profesional" />
                        </div>
                        <h2 className="nombre-profesional">{data?.nombre_profesional + " " + data?.apellido_profesional}</h2>
                        <ul className="about">
                            
                        </ul>
                    </div>
                    <form className="column-form">
                        <div className="column">
                            <label htmlFor="categoria">Categoría</label>
                            <select id="categoria" name="categoria" required>
                                <option value="Categoria 1">{data?.categoria_profesional}</option>
                            </select>
                            <label htmlFor="subcategoria">Subcategoría</label>
                            <select id="subcategoria" name="subcategoria" required>
                                <option value="Categoria 1">{data?.subcategoria_profesional}</option>
                            </select>
                        </div>
                        <div className="column">
                            <label htmlFor="tituloProfesional">Titulo del profesional</label>
                            <select id="tituloProfesional" name="tituloProfesional" required>
                                <option value="Categoria 1">{data?.titulo_profesional}</option>
                            </select>
                            <label htmlFor="ubicacion">Ubicación</label>
                            <input onChange={(e) => handleChanges(e)} type="text" id="ubicacion" name="direccion" />
                        </div>
                        <div className="column">
                            <label htmlFor="fecha">Fecha</label>
                            <input onChange={(e) => handleChanges(e)} name="fecha" className="form-control" type="datetime-local" id="fecha" placeholder="Select DateTime" />
                        </div>
                    </form>
                    <a onClick={() => navigate(`/elegirpago/${id}`)}>
                        <button className="agendar">Agendar</button>
                    </a>
                </div>
            </main>

            {/* Añade la referencia a flatpickr, si es necesario */}
            <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
        </div>
    );
};

export default Agendar;


