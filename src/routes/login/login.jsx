import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './login.css'; // Asegúrate de importar el nuevo archivo CSS

// import instagramIcon from '../../assets/icon/instagram.svg';
// import gmailIcon from '../../assets/icon/gmail.svg';
// import userIcon from '../../assets/icon/user.svg';
import Flechita from '../../components/flechita';
import Arrow from '../../assets/icon/arrowContinue.svg'

const Login = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Flechita onClick={handleBackClick} />
      <div className="loginPrincipalContainer">
        <div className="loginBackground"></div>
        <div className="loginText">
          <h1>Inicia sesión y continúa viendo tus comidas favoritas.</h1>
        </div>
        <div className="loginList">
          <ul>
            {/* google */}
            <li>
              <a className="loginButtonRegister" href="/inicioSesion/google">
                <img src={Arrow} alt="Facebook" />
                <p>Inicia sesión con Google</p>
              </a>
            </li>
            {/* GitHub */}
            <li>
              <a className="loginButtonRegister" href="/inicioSesion/github">
                <img src={Arrow} alt="Instagram" />
                <p>Inicia sesión con github</p>
              </a>
            </li>
            <li>
              <a className="loginButtonRegister">
                <img src={Arrow} alt="Correo" />
                <Link to="/loginRuraq" className="loginLinkToFz">
                  Inicia sesión con Ruraq
                </Link>
                
              </a>
            </li>
            
          </ul>
          <Link to="/home">No te preocupes, hecha un vistaso ;D</Link>
        </div>
      </div>
    </>
  );
};

export default Login;