
import './RegistroRuraq.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const RegistroRuraq = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  // Estado para manejar la fecha de nacimiento del usuario
  const [selectedOption, setSelectedOption] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [confirmaCorreo, setConfirmaCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmaContraseña, setConfirmaContraseña] = useState('');

    // Listas para los select de día, mes y año
    const dias = Array.from({ length: 31 }, (_, i) => i + 1);
    const meses = [
      { valor: '01', nombre: 'Enero' },
      { valor: '02', nombre: 'Febrero' },
      { valor: '03', nombre: 'Marzo' },
      { valor: '04', nombre: 'Abril' },
      { valor: '05', nombre: 'Mayo' },
      { valor: '06', nombre: 'Junio' },
      { valor: '07', nombre: 'Julio' },
      { valor: '08', nombre: 'Agosto' },
      { valor: '09', nombre: 'Septiembre' },
      { valor: '10', nombre: 'Octubre' },
      { valor: '11', nombre: 'Noviembre' },
      { valor: '12', nombre: 'Diciembre' },
    ];
    const anios = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  // Manejadores de eventos para los campos
  const handleDiaChange = (event) => setDia(event.target.value);
  const handleMesChange = (event) => setMes(event.target.value);
  const handleAnioChange = (event) => setAnio(event.target.value);
  const handleNombreChange = (event) => setNombreUsuario(event.target.value);
  const handleCorreoChange = (event) => setCorreo(event.target.value);
  const handleConfirmaCorreoChange = (event) => setConfirmaCorreo(event.target.value);
  const handleContraseñaChange = (event) => setContraseña(event.target.value);
  const handleConfirmaContraseñaChange = (event) => setConfirmaContraseña(event.target.value);
  const handleOptionChange = (event) => setSelectedOption(event.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Valida los campos antes de enviar
    if (correo !== confirmaCorreo || contraseña !== confirmaContraseña) {
      alert('El correo o la contraseña no coinciden');
      return;
    }
  
    const fechaNacimientoCompleta = `${anio}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}T00:00:00.000Z`;
    // Crea el objeto de datos con los nombres correctos para el backend
    const userData = {
      FullName: nombreUsuario,  // Asignando el mismo nombre por simplicidad
      password: contraseña,
      email: correo,
      Gender: selectedOption,
      fecha_nacimiento: fechaNacimientoCompleta,
      compras_realizadas: [],
      favoritos: [],
      carrito: [],
      talleres_educativos: [],
    };
    console.log('Enviando los siguientes datos al backend:', userData);
  
    try {
      const response = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      console.log('Respuesta del servidor:', response);
  
      if (response.ok) {
        console.log('Usuario creado con éxito');
        alert('Usuario creado con éxito');
  
        // Prueba con una redirección directa para verificar si navigate está funcionando correctamente
        navigate('/terminosCondicionesRuraq');  // Redirige a términos y condiciones
      } else {
        const errorData = await response.json();
        console.log('Error al crear el usuario:', errorData);
        alert('Error al crear el usuario: ' + (errorData.errors.map(e => e.msg).join(', ')));
      }
    } catch (error) {
      console.error('Error al conectarse con el backend:', error);
      alert('Error de conexión: ' + error.message);
    }
  };

  // Retorna el JSX para renderizar el componente
  return (
<>
  {/* Componente Flechita con evento de click para volver */}
  <Flechita onClick={handleBackClick} />

  <div className="registroRuraqPrincipalContainer">
    <div className="registroRuraqInputUser">
      <h2>Nombre de usuario</h2>
      <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 carácteres</p>
      <input
        className="registroRuraqInputNormalito"
        type="text"
        value={nombreUsuario}
        onChange={handleNombreChange}
      />
    </div>

  <div className="registroRuraqInputUser">
    <h2>Correo electrónico*</h2>
    <input
      className="registroRuraqInputNormalito"
      type="email"
      value={correo}
      onChange={handleCorreoChange}
    />
  </div>

  <div className="registroRuraqInputUser">
    <h2>Confirma tu correo*</h2>
    <input
      className="registroRuraqInputNormalito"
      type="email"
      value={confirmaCorreo}
      onChange={handleConfirmaCorreoChange}
    />
  </div>

  <div className="registroRuraqInputUser">
    <h2>Contraseña*</h2>
    <p>Recuerda crear una contraseña difícil de adivinar</p>
    <input
      className="registroRuraqInputNormalito"
      type="password"
      value={contraseña}
      onChange={handleContraseñaChange}
    />
  </div>

  <div className="registroRuraqInputUser">
    <h2>Confirma tu contraseña*</h2>
    <input
      className="registroRuraqInputNormalito"
      type="password"
      value={confirmaContraseña}
      onChange={handleConfirmaContraseñaChange}
    />
  </div>

  <div className="registroRuraqSexInput">
    <h2>Género</h2>
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value=""></option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
  </div>

  <div className="registroRuraqDate">
    <h2>Fecha de Nacimiento</h2>
    <div className="registroRuraqDateSelect">
      <select value={dia} onChange={handleDiaChange}>
        <option value="" disabled>
          DD
        </option>
        {dias.map((dia) => (
          <option key={dia} value={dia}>
            {dia}
          </option>
        ))}
      </select>

      <select value={mes} onChange={handleMesChange}>
        <option value="" disabled>
          MM
        </option>
        {meses.map((mes) => (
          <option key={mes.valor} value={mes.valor}>
            {mes.nombre}
          </option>
        ))}
      </select>

      <select value={anio} onChange={handleAnioChange}>
        <option value="" disabled>
          YYYY
        </option>
        {anios.map((anio) => (
          <option key={anio} value={anio}>
            {anio}
          </option>
        ))}
      </select>
    </div>
  </div>

  <img src={imagenBg} className="registroRuraqImagenBg" alt="imagenBackgroun" />

  <Continuar onClick={handleSubmit} texto="Continuar" />

  </div>
</>
  );
};

export default RegistroRuraq;