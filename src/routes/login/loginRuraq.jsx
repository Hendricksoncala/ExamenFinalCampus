import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Flechita from '../../components/flechita.jsx';
import Arrow from "../../assets/icon/arrowContinue.svg"
import './loginRuraq.css';
import fondo from '../../assets/icon/fondo.png'

const LoginRuraq = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); // Estado para el email
  const [password, setPassword] = useState(''); // Estado para el password
  const [error, setError] = useState(null); // Estado para errores

  const handleBackClick = () => {
    navigate(-1);
  };

  // Maneja el envío del formulario de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault(); // Previene que el formulario se envíe de forma predeterminada

    try {
      const response = await fetch('http://localhost:3000/inicioSesion/sessionLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Esto enviará la cookie al backend
      });

      if (response.ok) {
        // Login exitoso, navega a la página de inicio
        navigate('/home');
      } else {
        const data = await response.json();
        setError(data.message || 'Error en el inicio de sesión');
      }
    } catch (err) {
      setError('Hubo un problema con el servidor');
    }
  };

  return (
    <>
      <Flechita onClick={handleBackClick} />
      <div className="loginRuraqContainer">
        <form className="loginRuraqForm" onSubmit={handleLogin}>
          <div className="loginRuraqInputContent">
            <p>Nombre de usuario, celular o correo</p>
            <input
              type="text"
              className="loginRuraqInputIngreso"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
              required
            />
          </div>
          <div className="loginRuraqInputContent">
            <p>Contraseña</p>
            <input
              type="password"
              className="loginRuraqInputIngreso"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
              required
            />
          </div>

          {/* Mostrar error si existe */}
          {error && <div className="error-message">{error}</div>}

          <div className="loginRuraqIngresoForgettedPass">
            <p onClick={handleLogin}>
              Iniciar sesión
            </p>{' '}
            {/* Cambié el botón por texto */}

            <link to="/home">No te preocupes, hecha un vistaso ;D</link>
          </div>
        </form>
      </div>


    </>
  );
};

export default LoginRuraq;