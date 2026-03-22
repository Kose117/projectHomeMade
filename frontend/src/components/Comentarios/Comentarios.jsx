// ComentariosComponent.jsx
import React from 'react';
import './Comentarios.css';
import homemadelogo from "../../assets/imgs/homemade.png";
import multimedia from "../../assets/imgs/multimedia.png";
import pintor2 from "../../assets/imgs/pintor2.jpg";
import { getProfesionalById } from '../../services/profesionales';
import { useNavigate, useParams } from 'react-router-dom';


const Comentarios = () => {
  const firstLoad = React.useRef(true);
  const navigate = useNavigate()
  const {id} = useParams();
  const [loading, setLoading] = React.useState(true);
  const [profesional, setProfesional] = React.useState(null);
  React.useEffect(() => {
    if(firstLoad.current){
      getProfesionalById(id).then((response) => {
        setProfesional(response);
      });
      firstLoad.current = false;
    }
    if (profesional !== null) {
      setLoading(false);
    }
  }, [profesional]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className='comment'>
      <header>
        <a onClick={() => navigate("/")}>
          <div className="logo">
            <img src={homemadelogo} alt="Logo de la compañía" />
          </div>
        </a>
      </header>
      <main className='main'>
        <div className="card-container">
          <div className="profile-section">
            <img className="profile-image" src={pintor2} alt="Imagen de perfil" />
            <h2> {profesional.nombre_profesional + " " +  profesional.apellido_profesional} </h2>
            <p><span>Fecha</span>: Sabado, 28 de enero de 2023</p>
            <p><span>Total</span>: $80.000</p>
            <p><span>Servicio</span>: {profesional.subcategoria_profesional} </p>
          </div>
          <div className="divider"></div>
          <div className="comments-section">
            <div className="comenti">
              <p><span>Comentarios:</span></p>
            </div>
            <textarea></textarea>
            <div className="upload-section">
              <img src={multimedia} alt="Ícono de carga" className="carga" />
              <p>Arrastra las fotos y videos aquí</p>
              <button className="seleccionar" >Seleccionar</button>
            </div>
          </div>
        </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="/js/perfil.js"></script>
    </div>
  );
};

export default Comentarios;
