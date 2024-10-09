import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoStart from '../../assets/img/mainlogo.svg';
import './start.css';

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
        <img src={logoStart} alt="Main Logo" className="logo-img" />
      </div>
    </div>
  );
};

export default Start;