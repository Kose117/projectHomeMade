
import React from 'react';
import { useState, useEffect } from 'react';
import "./PagoExitoso.css";
import HomeMadeLogo from './HomeMade.png';

export const PagoExitoso = ({ nombre }) => {
    return (
        <div className='PagoE'>
            <nav>
                <div id="logo">
                    <img src="../assets/imgs/HomeMade.png" alt="Logo de la compañía" />
                </div>
            </nav>
            <main>
                <div className="main" />
                <div className="resumen">
                    <button>Descargar comprobante</button>
                    <div className="icono">
                        <i className="uil uil-check-circle"></i>
                    </div>
                    <h2>Pago Exitoso!</h2>
                    <a href="Feed.html">
                        <button>Continuar</button>
                    </a>
                </div>
            </main>
        </div>
    );
};

