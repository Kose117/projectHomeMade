// ElegirPagoComponent.jsx
import React from 'react';
import './Elegirpago.css';
import logoImg from '../../assets/imgs/homemade.png';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ElegirPago = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className='elegirPago'>
      <nav>
        <div className="logo">
          <img src={logoImg} alt="Logo de la compañía" />
        </div>
      </nav>
      <main>
        <div className="main">
          <h1 className="titulo">Métodos de pago</h1>
          <div className="metodos">
            <h2>Tarjeta de crédito o débito</h2>
            <a onClick={() => navigate(`/pago/${id}`)}>
              <button>Añadir tarjeta</button>
            </a>
            <h2>Otras opciones</h2>
            <button>Nequi</button>
            <button>Daviplata</button>
            <button>PSE</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ElegirPago;
