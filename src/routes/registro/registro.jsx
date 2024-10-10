import React from 'react';
import { Link } from 'react-router-dom';
import Registrarse from '../../components/registrarse.jsx'
import './registro.css';
import insta from '../../assets/icon/instagram.png'
import github from '../../assets/icon/github.png'
import gmail from '../../assets/icon/gmail.png'


const Registro = () => {
  return (
    <>
      <div className="registroPrincipalContainer">
        <div className="registroBackGround"></div>
        <div className="registroText">
          <h1>
            Regístrate ahora y obtén las mejores promociones en
            <span> nuestra comida </span>
          </h1>
        </div>
        <div className="registroList">
          <ul>
            {/* github */}
            <li>
              <a className="registroButtonRegister" href="/inicioSesion/github">
                <img src={github} alt="Instagram" />
                <p>
                  Regístrate con 
                  <span> github</span>
                </p>
              </a>
            </li>
            {/* Gmail */}
            <li>
              <a className="registroButtonRegister" href="/inicioSesion/google">
                <img src={gmail} alt="Gmail" />
                <p>
                  Regístrate con 
                  <span> Gmail</span>
                </p>
              </a>
            </li>
            {/* Celular */}
            <li>
              <a className="registroButtonRegister">
                <img src={Registrarse} alt="Celular" />
                <Link to="/registroCelular" className="registroLinktoFz">
                  Regístrate con tu 
                  <span> Celular</span>
                </Link>
              </a>
            </li>
            {/* Ruraq */}
            <li>
              <a className="registroButtonRegister">
                <img src={Registrarse} alt="User" />
                <Link to="/registroRuraq" className="registroLinktoFz">
                  Regístrate con tu 
                  <span> correo</span>
                </Link>
              </a>
            </li>
          </ul>
          <div className="registroText2">
            <p>
              ¿Ya tienes una cuenta? <br />
              <Link to="/login"> Inicia sesión </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;