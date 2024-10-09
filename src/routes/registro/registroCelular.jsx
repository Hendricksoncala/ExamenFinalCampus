
import { useNavigate } from 'react-router-dom';
import './registroCelular.css'; // Nuevo archivo CSS
import React, { useState } from 'react';

const RegistroCelular = () => {
  const navigate = useNavigate(); // Hook para la navegación entre rutas
  const handleBackClick = () => {
    navigate(-1); // Función para navegar hacia atrás cuando se hace clic en la flecha
  };

  // Estado para manejar la selección del sexo del usuario
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Actualiza la opción seleccionada
  };

  // Estado para manejar la fecha de nacimiento del usuario
  const dias = Array.from({ length: 31 }, (_, i) => i + 1); // Días del 1 al 31
  const meses = [
    { nombre: 'Enero', valor: 1 },
    { nombre: 'Febrero', valor: 2 },
    { nombre: 'Marzo', valor: 3 },
    { nombre: 'Abril', valor: 4 },
    { nombre: 'Mayo', valor: 5 },
    { nombre: 'Junio', valor: 6 },
    { nombre: 'Julio', valor: 7 },
    { nombre: 'Agosto', valor: 8 },
    { nombre: 'Septiembre', valor: 9 },
    { nombre: 'Octubre', valor: 10 },
    { nombre: 'Noviembre', valor: 11 },
    { nombre: 'Diciembre', valor: 12 },
  ];
  const anios = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Años desde el actual hacia atrás

  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');

  const handleDiaChange = (event) => {
    setDia(event.target.value);
  };

  const handleMesChange = (event) => {
    setMes(event.target.value);
  };

  const handleAnioChange = (event) => {
    setAnio(event.target.value);
  };

  const fechaNacimientoCompleta = `${anio}-${mes}-${dia}`; // Formato: AAAA-MM-DD

  // Estado para manejar los valores del código de país, el número de celular y la confirmación del número
  const [codigo, setCodigo] = useState(''); // Código de país seleccionado
  const [numeroCelular, setNumeroCelular] = useState(''); // Número de celular ingresado
  const [numeroCelularConfirm, setNumeroCelularConfirm] = useState(''); // Confirmación del número de celular

  // Lista de códigos de país para Latinoamérica
  const codigosLatinoamerica = [
    { codigo: '+54' }, // Argentina
    { codigo: '+591' }, // Bolivia
    { codigo: '+56' }, // Chile
    { codigo: '+57' }, // Colombia
    { codigo: '+506' }, // Costa Rica
    { codigo: '+53' }, // Cuba
    { codigo: '+593' }, // Ecuador
    { codigo: '+503' }, // El Salvador
    { codigo: '+502' }, // Guatemala
    { codigo: '+504' }, // Honduras
    { codigo: '+52' }, // México
    { codigo: '+505' }, // Nicaragua
    { codigo: '+507' }, // Panamá
    { codigo: '+595' }, // Paraguay
    { codigo: '+51' }, // Perú
    { codigo: '+598' }, // Uruguay
    { codigo: '+58' }, // Venezuela
  ];

  // Maneja el cambio del código de país seleccionado
  const handleCodigoChange = (event) => {
    setCodigo(event.target.value); // Actualiza el código de país seleccionado
  };

  // Maneja el cambio del número de celular ingresado
  const handleCelularChange = (event) => {
    setNumeroCelular(event.target.value); // Actualiza el número de celular
  };

  // Maneja el cambio de la confirmación del número de celular
  const handleCelularConfirmChange = (event) => {
    setNumeroCelularConfirm(event.target.value); // Actualiza el número de celular confirmado
  };

  return (
    <>
      {/* Componente Flechita para regresar a la página anterior */}
      <Flechita onClick={handleBackClick} />

      {/* Contenedor principal del formulario de registro de celular */}
      <div className="registroCelularContainer">
        {/* Sección para ingresar el nombre de usuario */}
        <div className="registroCelularInputUser">
          <h2>Nombre de usuario</h2>
          <p>*Crea un nombre de usuario de mínimo 5 y máximo de 12 caracteres</p>
          <input className="registroCelularInputNormalito" type="text" />
        </div>

        {/* Sección para ingresar el número de celular */}
        <div className="registroCelularInputUser">
          <h2>Número de celular*</h2>
          <div className="registroCelularInputGroup">
            <select value={codigo} onChange={handleCodigoChange}>
              {codigosLatinoamerica.map((item, index) => (
                <option key={index} value={item.codigo}>
                  {item.codigo}
                </option>
              ))}
            </select>
            <input
              className="registroCelularInputPhone"
              type="text"
              value={numeroCelular}
              onChange={handleCelularChange}
              // placeholder="Número de celular"
            />
          </div>
        </div>

        {/* Sección para confirmar el número de celular */}
        <div className="registroCelularInputUser">
          <h2>Confirma tu celular*</h2>
          <div className="registroCelularInputGroup">
            <select value={codigo} onChange={handleCodigoChange}>
              {codigosLatinoamerica.map((item, index) => (
                <option key={index} value={item.codigo}>
                  {item.codigo}
                </option>
              ))}
            </select>
            <input
              className="registroCelularInputPhone"
              type="text"
              value={numeroCelularConfirm}
              onChange={handleCelularConfirmChange}
              // placeholder="Confirma tu número"
            />
          </div>
        </div>

        {/* Sección para ingresar la contraseña */}
        <div className="registroCelularInputUser">
          <h2>Contraseña*</h2>
          <p>Recuerda crear una contraseña difícil de adivinar</p>
          <input className="registroCelularInputNormalito" type="text" />
        </div>

        {/* Sección para confirmar la contraseña */}
        <div className="registroCelularInputUser">
          <h2>Confirma tu contraseña*</h2>
          <input className="registroCelularInputNormalito" type="text" />
        </div>

        {/* Sección para seleccionar el sexo */}
        <div className="registroCelularSexInput">
          <h2>Sexo</h2>
          <select id="opciones" value={selectedOption} onChange={handleChange}>
            <option value="" disabled></option>
            <option value="M">M</option>
            <option value="F">F</option>
          </select>
        </div>

        {/* Sección para ingresar la fecha de nacimiento */}
        <div className="registroCelularDate">
          <h2>Fecha de Nacimiento</h2>
          {/* Selector para el día */}
          <div className="registroCelularDateSelect">
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

            {/* Selector para el mes */}
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

            {/* Selector para el año */}
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

        {/* Imagen de fondo */}
        <img src={imagenBg} alt="imagenBackgroun" className="registroCelularImagenBg" />
      </div>

      {/* Botón para continuar */}
      <Continuar to="/terminosCondicionesCelular" />
    </>
  );
};

export default RegistroCelular;