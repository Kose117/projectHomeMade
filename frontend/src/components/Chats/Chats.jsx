// Bienvenida.jsx
import React from 'react';
import './Chats.css';
import homemadelogo from "../../assets/imgs/homemade.png";
import { useNavigate } from 'react-router-dom';

const Chats = () => {
    const navigate = useNavigate();
    return (
        <div className="chat">
            <header>
                <nav>
                    <div className="logo">
                        <a onClick={() => navigate("/feed")}>
                            <img src={homemadelogo} alt="Logo de la compañía" />
                        </a>
                    </div>

                </nav>
            </header>
            <div className="home">
                <div className="container">
                    <div className="sidebar">
                        <div className="navbar">
                            <span className="logo">Messages</span>
                            <div className="user">
                                <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                    alt="" />
                                <span> daniel</span>
                                <button className="logout">logout</button>
                            </div>
                        </div>
                        <div className="search">
                            <div className="searchForm">
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="chats">
                            <div className="contorno-chat">
                                <div className="centrar-chat">
                                    <div className="container-chat">
                                        <div className="userChat">
                                            <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                                alt="" />
                                            <div className="userChatInfo">
                                                <span>Pedro</span>
                                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                                            </div>
                                        </div>
                                        <div className="userChat">
                                            <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                                alt="" />
                                            <div className="userChatInfo">
                                                <span>Juan</span>
                                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                                            </div>
                                        </div>
                                        <div className="userChat">
                                            <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                                alt="" />
                                            <div className="userChatInfo">
                                                <span>Federico</span>
                                                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chat">
                        <div className="chatInfo">
                            <div className="chatIcons">
                                <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
                                    alt="" />
                            </div>
                            <span>Juan</span>

                        </div>
                        <div className="messages">
                            <div className="message owner">
                                <div className="messageInfo">
                                    <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
                                        alt="" />
                                    <span>Hace 2 min</span>
                                </div>
                                <div className="messageContent">
                                    <p>Mira este profesional</p>
                                    <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                        alt="" />
                                </div>
                            </div>
                            <div className="message message.owner">
                                <div className="messageInfo">
                                    <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                        alt="" />
                                    <span>Justo ahora</span>
                                </div>
                                <div className="messageContent ">
                                    <p>Se ve interesante</p>
                                </div>
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Buscar..." />
                            <div className="send">
                                <img src="attach.png" alt="" />
                                <input type="file" style={{ display: 'none' }} id="file" name="file" />
                                <label for="file">
                                    <img src="imagen.png" alt="" />
                                </label>
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Chats;