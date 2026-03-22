import React from 'react';
import './Feed.css';
import logoImg from '../../assets/imgs/homemade.png';
import persona1 from '../../assets/imgs/persona1.jpg';
import persona2 from '../../assets/imgs/jose1.jpg';
import profile5 from '../../assets/imgs/profile-5.jpg';
import profile3 from '../../assets/imgs/profile-3.jpg';
import profile6 from '../../assets/imgs/profile-6.jpg';
import pintura from '../../assets/imgs/pintura.jpg';
import profile1 from '../../assets/imgs/profile-1.jpg';
import profile2 from '../../assets/imgs/profile-2.jpg';
import profile4 from '../../assets/imgs/profile-4.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TiHome } from "react-icons/ti";
import { FaHashtag } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



const Feed = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    return (
        <div className='Feed'>
            <nav className='nav'>
                <div className="container">
                    <h2 className="log">
                        Home-Made
                    </h2>
                </div>
            </nav>

            <main>
                <div className="container">
                    <div className="left">
                        <a className="profile">
                            <div className="profile-photo">
                                <img className="foto-perfil" src={persona2} alt="Imagen de perfil" />
                            </div>
                            <div className="handle">
                                <h4 id="name">{user.name}</h4>
                                <p id="username" className="text-muted">@{user.apellido}</p>
                            </div>
                        </a>
                        <div className="sidebar">
                            <a className="menu-item active">
                                <TiHome />
                                <h3>Inicio</h3>
                            </a>
                            <a className="menu-item" onClick={() => navigate("/paginaProfesionales")}>
                                <FaHashtag />
                                <h3>Explorar</h3>
                            </a>
                            <a className="menu-item" id="comunidad" onClick={() => navigate("/comunidad")}>
                                <FaSearch />
                                <h3>Comunidad</h3>
                            </a>
                            <a className="menu-item" id="messages-notifications" >
                                <AiFillMessage />
                                <h3>Messages</h3>
                            </a>
                            <a onClick={() => navigate("/historial")} className="menu-item">
                                <FaHistory />
                                <h3>Citas</h3>
                            </a>
                            <a className="menu-item" onClick={() => navigate("/perfilProfesional")} id="btnPerfil">
                                <FaUser />
                                <h3>Pefil</h3>
                            </a>
                        </div>
                        <label for="settings" className="btn btn-primary">More</label>
                    </div>
                    <div className="middle">
                        <div className="create-post">
                            <form className="mensaje">
                                <div className="profile-photo">
                                    <img className="foto-perfil" src={persona2} alt="Imagen de perfil" />
                                </div>
                                <input type="text" placeholder="Escribe algo..." id="create-post" />
                                <input type="submit" value="Post" className="btn btn-secondary" />
                            </form>

                            <div className="aditional-icons">
                                <i className="uil uil-images"></i>
                                <i className="uil uil-smile"></i>
                                <i className="uil uil-tag-alt"></i>
                            </div>
                        </div>

                        <div className="feeds">
                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img id="perfil_${id_feed_post}" src={profile5} />
                                        </div>
                                        <div className="ingo">
                                            <h3 id="username_${id_feed_post}">Miranda Carvajal</h3>
                                            <p id="location_${id_feed_post}">@jnd1er escribió una reseña a
                                                @PintoresConAlas</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="photo">
                                    <img id="photo_${id_feed_post}" />
                                </div>
                                <div className="info-post">
                                    <p> La pintura de mi nueva casa quedó increíble </p>
                                </div>
                                <div className="action-buttons">
                                    <div className="interaction-buttons">
                                        <span><i className="uil uil-comment-alt"></i></span>
                                        <span><i className="uil uil-heart"></i></span>
                                        <span><i className="uil uil-share"></i></span>
                                    </div>
                                    <div className="bookmark">
                                        <span><i className="uil uil-bookmark"></i></span>
                                    </div>
                                </div>
                                <div className="liked-by">
                                    <span><img src={profile3} alt="" /></span>
                                    <span><img src={profile3} alt="" /></span>
                                    <span><img src={profile3} alt="" /></span>
                                    <p>Liked by <b>Nico Millan</b> and 323 others</p>
                                </div>
                                <div className="caption">
                                    <p id="desc_${id_feed_post}">Lana Rose: Yo también los recomiendo! <span
                                        className="hash-tag">#MejorPintor</span></p>
                                </div>
                                <div className="text-muted">View all 227 comments</div>
                            </div>
                            <div className="feed">
                                <div className="head">
                                    <div className="user">
                                        <div className="profile-photo">
                                            <img id="perfil_${id_feed_post}" src={profile6} alt="" />
                                        </div>
                                        <div className="ingo">
                                            <h3 id="username_${id_feed_post}">Doña Norman</h3>
                                            <p id="location_${id_feed_post}">@jnd1er escribió una reseña a
                                                @PintoresConAlas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-post">
                                    <p>Excelente trabajo! Los volveré a contratar</p>
                                </div>
                                <div className="photo">
                                    <img id="photo_${id_feed_post}" src={pintura} alt="" />
                                </div>
                                <div className="action-buttons">
                                    <div className="interaction-buttons">
                                        <span><i className="uil uil-comment-alt"></i></span>
                                        <span><i className="uil uil-heart"></i></span>
                                        <span><i className="uil uil-share"></i></span>
                                    </div>
                                    <div className="bookmark">
                                        <span><i className="uil uil-bookmark"></i></span>
                                    </div>
                                </div>
                                <div className="liked-by">
                                    <span><img src={profile3} alt="" /></span>
                                    <span><img src={profile3} alt="" /></span>
                                    <span><img src={profile3} alt="" /></span>
                                    <p>Liked by <b>Nico Millan</b> and 323 others</p>
                                </div>
                                <div className="caption">
                                    <p id="desc_${id_feed_post}">Lana Rose: Yo también los recomiendo! <span
                                        className="hash-tag">#MejorPintor</span></p>
                                </div>
                                <div className="text-muted">View all 227 comments</div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="messages">
                            <a href="chats.html">
                                <div className="heading">
                                    <h4>Messages</h4><i className="uil uil-edit"></i>
                                </div>
                            </a>
                            <div className="search-bar">
                                <i className="uil uil-search"></i>
                                <input type="search" placeholder="Search messages" id="message-search" />
                            </div>
                            <div className="category">
                                <h6 className="active">Primary</h6>
                                <h6>General</h6>
                                <h6 className="message-requests">Requests(7)</h6>
                            </div>
                            <div className="message">
                                <div className="profile-photo">
                                    <img src={profile1} alt="" />
                                    <div className="active"></div>
                                </div>
                                <div className="message-body">
                                    <h5>Edam Quist</h5>
                                    <p className="text-muted">Ok</p>
                                </div>
                            </div>
                            <div className="message">
                                <div className="profile-photo">
                                    <img src={profile2} alt="" />
                                </div>
                                <div className="message-body">
                                    <h5>Mary Poppins</h5>
                                    <p className="text-muted">Claro!</p>
                                    <p className="text-bold">2 new messages</p>
                                </div>
                            </div>
                            <div className="message">
                                <div className="profile-photo">
                                    <img src={profile3} alt="" />
                                    <div className="active"></div>
                                </div>
                                <div className="message-body">
                                    <h5>Luna Bloom</h5>
                                    <p className="text-muted">No se preocupe</p>
                                </div>
                            </div>
                            <div className="message">
                                <div className="profile-photo">
                                    <img src={profile4} alt="" />
                                    <div className="active"></div>
                                </div>
                                <div className="message-body">
                                    <h5>Flora Parks</h5>
                                    <p className="text-muted">Hasta luego</p>
                                </div>
                            </div>
                            <div className="message">
                                <div className="profile-photo">
                                    <img src={profile6} alt="" />
                                </div>
                                <div className="message-body">
                                    <h5>Marilyn Monroe</h5>
                                    <p className="text-muted">Buen día</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Feed;