// Bienvenida.jsx
import React from 'react';
import './Bienvenida.css';
import manosimagen from "../../assets/imgs/hand.png";

import { Header } from '../Common/Header/Header';
import { useNavigate } from 'react-router-dom';

const Bienvenida = () => {
  const navigate = useNavigate();
  return (
    <div className='Bienvenida'>
      <Header />
      <main>
        <div className="login">
          <h1 className="bienvenido">BIENVENIDO</h1>
          <h1 className="homeMade">A HOME-MADE</h1>
          <img className="manosImg" src={manosimagen} alt="Logo de la compañía" />
        </div>
        <div className="fondo-rojo">
          <p>"​​Transformando casas en hogares, un servicio a la medida de tus necesidades domésticas"</p>
          <div className="buttons">
            <button className="continuar" onClick={() => navigate("/feed")}>Continuar</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bienvenida;
