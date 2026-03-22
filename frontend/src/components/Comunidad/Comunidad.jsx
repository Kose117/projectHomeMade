// ComunidadComponent.jsx
import React from 'react';
import './Comunidad.css';
import limpiezaImg from '../../assets/imgs/limpieza.png';
import workImg from '../../assets/imgs/work.png';
import ideaImg from '../../assets/imgs/idea.png';
import puntosImg from '../../assets/imgs/puntos.png';
import popularImg from '../../assets/imgs/popular.png';
import searchImg from '../../assets/imgs/search.png';
import commentImg from '../../assets/imgs/comment.png';
import homemadelogo from "../../assets/imgs/homemade.png";
import { useNavigate } from 'react-router-dom';

const Comunidad = () => {
    const navigate = useNavigate();
    return (
        <div className='comunidad'>
            <div className="contenedor">
                <a onClick={() => navigate("/feed")}>
                    <div className="izquierda">
                        <img src={homemadelogo} alt="Imagen Izquierda" />
                    </div>
                </a>
                <div className="derecha">
                    <img src={searchImg} alt="Imagen Derecha" />
                </div>
            </div>

            <div className="secciones">
                <div className="seccion1">
                    <div className="popular">
                        <div className="imagen">
                            <img src={popularImg} alt="Imagen" />
                        </div>
                        <div className="texto">
                            <p>Popular</p>
                        </div>
                    </div>
                    <div className="popular2">
                        <p>Temas</p>
                        <div className="item">
                            <div className="imagen">
                                <img src={limpiezaImg} alt="Imagen" />
                            </div>
                            <div className="texto">
                                <p>Limpieza</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imagen">
                                <img src={workImg} alt="Imagen" />
                            </div>
                            <div className="texto">
                                <p>Trabajo</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imagen">
                                <img src={ideaImg} alt="Imagen" />
                            </div>
                            <div className="texto">
                                <p>Idea</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="imagen">
                                <img src={puntosImg} alt="Imagen" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seccion2">
                    <div className="comentario">
                        <div className="avatar">
                            <img
                                src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg"
                                alt="Avatar 1"
                            />
                            <p className="nombre-usuario">Daniel</p>
                        </div>
                        <div className="contenido-comentario">
                            <p>
                                ¡Ah, las manchas de vino! No te preocupes, aquí está mi consejo infalible para lidiar con ellas.
                                Tan pronto como veas ese derrame, ¡actúa rápido! Agarra un paño o toallas de papel y absorbe
                                suavemente el exceso, pero recuerda, nada de frotar enérgicamente. Luego, toma sal o bicarbonato
                                y espolvorea un poco sobre la mancha para absorber más líquido. Después, enjuaga desde el revés
                                de la tela con agua fría, presionando para diluir la mancha. Ahora viene el truco: mezcla agua y
                                detergente suave, aplícalo sobre la mancha y frota con cuidado. Enjuaga otra vez y repite estos
                                pasos si es necesario. Antes de lanzar la prenda a la lavadora, asegúrate de que la mancha
                                desapareció por completo. ¡Y voilà! Si la prenda es especial, mejor déjala en manos de
                                profesionales de tintorería. ¡No hay mancha de vino que pueda conmigo!
                            </p>
                        </div>
                        <div className="boton-comentar">
                            <img src={commentImg} alt="Icono Comentar" /> Comentar
                        </div>
                    </div>

                    <div className="comentario">
                        <div className="avatar">
                            <img
                                src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
                                alt="Avatar 1"
                            />
                            <p className="nombre-usuario">Juan</p>
                        </div>
                        <div className="contenido-comentario">
                            <p>
                                ¡Hola de nuevo! Ahora, hablemos de cocinar una pechuga de pollo de manera espectacular. Primero,
                                asegúrate de sazonarla generosamente con tus especias favoritas, como ajo en polvo, pimentón,
                                orégano o lo que más te guste. Luego, precalienta una sartén a fuego medio-alto con un poco de
                                aceite. Cuando esté bien caliente, coloca la pechuga en la sartén y déjala cocinar sin moverla
                                durante unos 4-5 minutos, hasta que se dore ese lado.
                                Ahora, el truco para mantenerla jugosa es darle la vuelta solo una vez. Voltea la pechuga con
                                unas pinzas y cocínala otros 4-5 minutos del otro lado. Si quieres asegurarte de que está cocida
                                por dentro, puedes usar un termómetro de cocina para que alcance una temperatura interna de 75°C
                                (165°F). Recuerda que el pollo seguirá cocinándose un poco después de retirarlo del fuego debido
                                al calor residual.
                            </p>
                        </div>
                        <div className="boton-comentar">
                            <img src={commentImg} alt="Icono Comentar" /> Comentar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comunidad;
