import Registrarse from '../../components/registrarse.jsx'
import { useNavigate } from 'react-router-dom';
import './terminosCondiciones.css'; // Nuevo archivo CSS
import React, { useState } from 'react';

const TerminosCondiciones = () => {
  const navigate = useNavigate();
  
  // Estado para los checkboxes
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleCheckboxChange1 = (event) => {
    setCheckbox1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setCheckbox2(event.target.checked);
  };

  const handleSubmit = () => {
    // Validar que los dos primeros checkboxes están seleccionados
    if (checkbox1 && checkbox2) {
      // Aquí puedes redirigir al login o realizar la acción deseada
      navigate('/loginRuraq'); // Cambia '/login' por la ruta correspondiente
    } else {
      alert('Por favor, acepta los términos y condiciones y la política de privacidad.');
    }
  };

  return (
    <>
      <Flechita onClick={handleBackClick} />
      <div className="TerminosCondicionesContenedorPrincipal">
        <div className="TerminosCondicionesContenedorCheckBox">
          <div className="TerminosCondicionesCheckbox">
            <input
              type="checkbox"
              id="checkbox1"
              checked={checkbox1}
              onChange={handleCheckboxChange1}
            />
            <label htmlFor="checkbox1">He leído y acepto la Política de privacidad*</label>
          </div>

          <div className="TerminosCondicionesCheckbox">
            <input
              type="checkbox"
              id="checkbox2"
              checked={checkbox2}
              onChange={handleCheckboxChange2}
            />
            <label htmlFor="checkbox2">He leído y acepto los Términos y condiciones*</label>
          </div>

          <div className="TerminosCondicionesCheckbox">
            <input type="checkbox" id="checkbox3" />
            <label htmlFor="checkbox3">
              Acepto que me envíen promociones y eventos a mi correo electrónico
            </label>
          </div>
        </div>
        <img
          src={imagenBgInverse}
          alt="imagenBgInverse"
          className="TerminosCondicionesImagenBgInverse"
        />
        <img
          src={imagenBgCorner}
          alt="imagenBgCorner"
          className="TerminosCondicionesImagenBgCorner"
        />
      </div>
      <Registrarse isTermsAccepted={checkbox1 && checkbox2} />
    </>
  );
};

export default TerminosCondiciones;