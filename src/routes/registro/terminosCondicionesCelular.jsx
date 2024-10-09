
import { useNavigate } from 'react-router-dom';
import './terminosCondiciones.css'; // Nuevo archivo CSS
import React from 'react';

const TerminosCondiciones = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Flechita onClick={handleBackClick} />
      <div className="TerminosCondicionesContenedorPrincipal">
        <div className="TerminosCondicionesContenedorCheckBox">
          <div className="TerminosCondicionesCheckbox">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">He leído y acepto la Política de privacidad*</label>
          </div>

          <div className="TerminosCondicionesCheckbox">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">He leído y acepto los Términos y condiciones*</label>
          </div>

          <div className="TerminosCondicionesCheckbox">
            <input type="checkbox" id="checkbox3" />
            <label htmlFor="checkbox3">
              Acepto que me envíen promociones y eventos a mi número de celular
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
      <Continuar to="/loginRuraq" texto="Registrarse" />
    </>
  );
};

export default TerminosCondiciones;