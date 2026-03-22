
import React from 'react';
import { useState, useEffect } from 'react';
import "./Perfil.css";
import HomeMadeLogo from './HomeMade.png';
import { Header } from '../Common/Header/Header';
import { useNavigate } from 'react-router-dom';

export const Perfil = ({ nombre }) => {
    const navigate = useNavigate()
    return (
        <div className='Perfil'>
            <Header />
            <main>
                <div className="container">
                    <div className="left">
                    </div>
                    <div className="middle">

                        <div className="header__wrapper">
                            <div className="top">
                                <a href="calendario.html">
                                    <div className="img__container">
                                        <img className="foto-perfil" src="../assets/imgs/pintor2.jpg" />
                                    </div>
                                </a>
                                <div className="left__col">
                                    <h2>JOSÉ MANUEL RODRÍGUEZ</h2>
                                    <div className="imagen-con-texto">
                                        <img src="../assets/imgs/mapa.png" alt="Descripción de la imagen" id="mapa" />
                                        <p>Bogotá, Colombia.</p>
                                    </div>
                                    <p>Pintor profesional de interiores en @PintuCasa</p>
                                    <p>JosePintucasa@gmail.com</p>

                                </div>
                                <ul className="about">
                                    <div className="rating-box">
                                        <div className="stars">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" onclick="togglePopup2()">Editar Pefil</button>
                                </ul>
                            </div>
                            <p>
                                Hola! Mi nombre es José Manuel Rodríguez y soy pintor profesional desde hace 7 años. Soy experto
                                en el manejo de técnicas como el marmoleado, la pintura en seco y la pintura en húmedo. Me
                                encanta mi trabajo y me esfuerzo por hacerlo de la mejor manera posible. Si quieres que pinte tu
                                casa, no dudes en contactarme!
                            </p>
                            <div className="right__col">
                                <div className="nav-profile">
                                    <ul>
                                        <button id="post-btn">Fotos</button>
                                        <button id="playlist-btn">Reseñas</button>

                                    </ul>
                                </div>
                                <div className="profile-sections">
                                    <div className="post section-content active" id="post">

                                        <label id="contador-fotos">Fotos <span id="numero-fotos">(0)</span></label>
                                        <div className="grid">

                                            <img src="../assets/imgs/marmoleado1.jpg" alt="" />
                                            <img src="../assets/imgs/marmoleado2.jpg" alt="" />
                                            <img src="../assets/imgs/marmoleado3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="playlist section-content" id="playlist">
                                        <label id="contador-reseñas">Reseñas <span id="numero-reseñas">(0)</span></label>
                                        <div className="grid-resena">
                                            <div className="review">
                                                <div id="contendor-img">

                                                    <img src="../assets/imgs/profile-2.jpg" alt="Imagen de reseña" />
                                                </div>
                                                <div className="contenti">
                                                    <h3>SARA RODRIGUEZ</h3>
                                                    <div id="negrilla">
                                                        <p style={{ color: 'black' }}>Servicio: </p>
                                                        <p style={{ color: 'black' }}>Pintura de interiores: Técnica marmoleado</p>

                                                    </div>
                                                    <p>Hace un trabajo excelente, todas mis paredes han sido pintadas por él
                                                    </p>
                                                </div>
                                                <div className="rating-box">
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div id="contendor-img">

                                                    <img src="../assets/imgs/profile-1.jpg" alt="Imagen de reseña" />
                                                </div>
                                                <div className="contenti">
                                                    <h3>MARÍA DEL CARMEN VILLANUEVA</h3>
                                                    <div id="negrilla">
                                                        <p style={{ color: 'black' }}>Servicio: </p>
                                                        <p style={{ color: 'black' }}>Pintura de interiroes: Técnica pintura en seco
                                                        </p>

                                                    </div>
                                                    <p>Excelente trabajo</p>
                                                </div>
                                                <div className="rating-box">
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div id="contendor-img">

                                                    <img src="../assets/imgs/profile-3.jpg" alt="Imagen de reseña" />
                                                </div>
                                                <div className="contenti">
                                                    <h3>MARCELA MICHAELUS JOELYS</h3>
                                                    <div id="negrilla">
                                                        <p style={{ color: 'black' }}>Servicio: </p>
                                                        <p style={{ color: 'black' }}> Pintura de interiroes: Técnica pintura en
                                                            seco</p>

                                                    </div>
                                                    <p>Su fuerte es el marmoleado</p>
                                                </div>
                                                <div className="rating-box">
                                                    <div className="stars">
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <a href="#" className="btn-cerrar-popup" onclick="cerrarPopup()"><i className="fas fa-times"></i></a>
                <div className="popup" id="popup">
                    <div className="wrapper">
                        <div className="header-area">
                            <header>Upload a photo and enjoy life!</header>
                        </div>
                        <div className="middle-area">
                            <form action="#" id="uploadForm">
                                <div className="form-content">
                                    <label for="fileUpload">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <p>Browse File to Upload</p>
                                        <input id="fileUpload" className="file-input" type="file" name="file"
                                            accept=".png,.jpg,.jpeg" hidden />
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="footer-area">
                            <div className="select-menu">
                                <div className="select-btn">
                                    <span>Select Song</span>
                                    <i className="uil uil-angle-down"></i>
                                </div>
                                <div className="content">
                                    <div className="search">
                                        <i className="uil uil-search"></i>
                                        <input spellCheck="false" type="text" placeholder="Search" />
                                    </div>
                                    <ul className="options"></ul>
                                </div>
                            </div>
                            <button id="btn-post" className="btn-post">Post</button>
                        </div>
                    </div>
                </div>


                <div className="popup" id="popup2">
                    <div className="wrapper">
                        <div className="header-area">
                            <header>Change your profile photo!</header>
                        </div>
                        <div className="middle-area">
                            <form action="#" id="uploadForm">
                                <div className="form-content">
                                    <label for="fileUpload">
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <p>Browse File to Upload</p>
                                        <input id="fileUpload2" className="file-input" type="file" name="file"
                                            accept=".png,.jpg,.jpeg" hidden />
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="footer-area">
                            <button id="btn-post2" className="btn-post">Post</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

