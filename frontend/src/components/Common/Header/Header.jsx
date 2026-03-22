import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import './Header.css';

export const Header = () => {
    const [open, setOpen] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        chkUser.id ? setOpen("none") : setOpen("flex");
    }, []);

    const chkUser = useSelector((state) => state.user);
    console.log(open);
    return (
        <header>
                <nav className="nav2">
                    <ul className="top-menu2">
                        <li><a onClick={() => navigate("/")}>Inicio</a></li>
                        <li><a href="#">Acerca</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Profesional</a></li>
                        <li><a href="#">Comunidad</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                    <div className="capsula-botones" style={{display: open}}>
                        <div className="buttons2">
                            <button onClick={() => navigate("/")} className="registrarse">Iniciar Sesión</button>
                            <button onClick={() => navigate("/registro")} className="registrarse">Registrarse</button>
                        </div>
                    </div>
                </nav>
            </header>
    );
    }