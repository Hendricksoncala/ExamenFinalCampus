import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fondo from '../../assets/icon/fondo.png';
import './start.css';

import ensalada from '../../assets/icon/ensalada.png';
import Arrow from "../../assets/icon/arrowContinue.svg"

const Start = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const navigateTimer = setTimeout(() => {
      navigate('/registro');
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

  return (
    <div className={`start-container ${isFading ? 'fade-out' : 'fade-in'}`}>
      <div className="logo-container">

        <img src={fondo} alt="Main Logo" className="logo-img" />

        <div className="texto-container">

          <div className="palabras">
            <h1 className="green">Eat</h1>
            <h1 >Well,</h1>
          </div>
          <div className="palabras">
            <h1  className="green">Eat</h1>
            <h1>Well,</h1>
          </div>
          <div className="palabras">
            <h1  className="green">Eat</h1>
            <h1>Well</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Start;