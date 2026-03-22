// Calendario.jsx
import React from 'react';
import './Calendario.css';
import homemadelogo from "../../assets/imgs/homemade.png";
import { useNavigate } from 'react-router-dom';

const Calendario = () => {
  const navigate = useNavigate();
  return (
    <div className='Calendario'>
      <nav>
        <a onClick={() => navigate("/perfilProfesional")}>
          <div className="logo">
            <img src={homemadelogo} alt="Logo de la compañía" />
          </div>
        </a>
      </nav>
      <main>
        <iframe
          className="google-calendar"
          src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23E67C73&ctz=America%2FBogota&title=Citas%20agendadas&mode=WEEK&showPrint=0&showCalendars=0&src=bGF1b3ZhbGxlYkBnbWFpbC5jb20&src=OGE3YTkyMTRmNWY0MDJmMDkzYTFiMGZiZjk2MzA5YmY4ZGY1Y2NmZWIxMWUxOTkyNGE3MmZjMTA0NWVkYzk4OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=MTE2ODAyZjQ4YjYyNzA1OWU1OTIxNmQ1ZDBhNWI2Mjc0MDgwYWQwNDRmODIxOGQzMjRiZDJjZDQ5MTAyOTE4OGJhOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWQ3YWE3NGY4YWQwODQxYmMzOTAxMWE1MWE3NjVhMzNhZGIzNDk1M2QxNDQ0YTliOTJiYTQ0YWI0ZmIzNTFjOUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YmVhODc3ODY1Y2M3MmM5NjJjZjg1NTZiZGZhN2NjM2NiZjI2NjQ0MDliNDMyNjlmNDQwMGI3ZWZjNWMyZWNlN0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=Zjc5YzFiYmZmZmEzZGIxNjViOGE2NGQ0ODY5NjNkNGNkMTdjYmRmYzY1YjFkNTNmYTgxMmI1ZmM1MDFjZGQ4Y0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZDJiZDI4MzEzYjc0NzRjYWI2MzcxYmRiZjczNTk2NDAwMjM3NmNhNTA1ZDM2OTA4MDgwYmEyMWRlNGExMzhmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZXMuY28jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%2327a2a4&color=%23009688&color=%23A79B8E&color=%23cccc7f&color=%23c29acc&color=%2381bdbe&color=%23cca797&color=%230B8043"
          style={{ borderWidth: 0 }}
          width="1000"
          height="800"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
      </main>
    </div>
  );
};

export default Calendario;

