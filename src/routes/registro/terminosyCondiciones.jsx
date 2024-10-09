import Flechita from '../../components/flechita.jsx'
import Registrarse from '../../components/registrarse.jsx'


import { useNavigate } from "react-router-dom";
import '../css/registro.css'
import React, { useState } from 'react';

const TerminosCondiciones = () => {
    
    const navigate  = useNavigate();
    const handleBackClick = () =>{
    navigate(-1);
    };

    return(
      
          <>
              <Flechita onClick={handleBackClick} />
              <div className="contenedorPrincipal__TyC">
                  <div className="contenedorCheckBox">
                      <div className="checkbox">
                          <input type="checkbox" id="checkbox1" />
                          <label htmlFor="checkbox1">He leído y acepto la Política de privacidad*</label>
                      </div>
      
                      <div className="checkbox">
                          <input type="checkbox" id="checkbox2" />
                          <label htmlFor="checkbox2">He leído y acepto los Términos y condiciones*</label>
                      </div>
      
                      <div className="checkbox">
                          <input type="checkbox" id="checkbox3" />
                          <label htmlFor="checkbox3">Acepto que me envíen promociones y eventos a mi correo electrónico</label>
                      </div>
                  </div>
                  <img src={imagenBgInverse} alt="imagenBgInverse" className="imagenBgInverse" />
                  <img src={imagenBgCorner} alt="imagenBgCorner" className="imagenBgCorner" />
              </div>
              <Registrarse />
          </>
      )
      
    //         <Flechita onClick={handleBackClick}/>
    //         <div className="contenedorPrincipal__TyC">
    //         <div className="contenedorCheckBox">
    //             <div className="checkbox">
    //             <input type="checkbox" id="checkbox1" />
    //             <label htmlfor ="checkbox1">He leído y acepto la Política de privacidad*</label>
    //             </div>

    //             <div className="checkbox">
    //             <input type="checkbox" id="checkbox2" />
    //             <label htmlfor="checkbox2">He leído y acepto los Términos y condiciones*</label>
    //             </div>

    //             <div className="checkbox">
    //             <input type="checkbox" id="checkbox3" />
    //             <label for="checkbox3">Acepto que me envíen promociones y eventos a mi correo electrónico</label>
    //             </div>
    //         </div>
    //         <img src={imagenBgInverse} alt="imagenBgInverse" className='imagenBgInverse' />
    //         <img src={imagenBgCorner} alt="imagenBgCorner" className='imagenBgCorner' />
    //         </div>
    //         <Registrarse />
    //     </>
    // )
}

export default TerminosCondiciones;



// import Flechita from '../../components/flechita.jsx';
// import Registrarse from '../../components/registrarse.jsx';
// import imagenBgInverse from '../../assets/img/rectanguloBgInverse.png';
// import imagenBgCorner from '../../assets/img/rectanguloBgCorner.png';

// import { useNavigate } from "react-router-dom";
// import '../css/registro.css';
// import React, { useState } from 'react';

// const TerminosCondiciones = () => {
//   const navigate = useNavigate();
  
//   // ? Manejo del estado de los checkboxes
//   const [termsAccepted, setTermsAccepted] = useState({
//     privacyPolicy: false,
//     termsConditions: false,
//     promotions: false,
//   });

//   // ? Manejar cambios en los checkboxes
//   const handleCheckboxChange = (e) => {
//     const { id, checked } = e.target;
//     setTermsAccepted((prevState) => ({
//       ...prevState,
//       [id]: checked
//     }));
//   };

//   // ? Función para navegar hacia atrás
//   const handleBackClick = () => {
//     navigate(-1);
//   };

//   // ? Lógica para habilitar el botón de registro solo si se han aceptado los términos obligatorios
//   const canRegister = termsAccepted.privacyPolicy && termsAccepted.termsConditions;

//   return (
//     <>
//       <Flechita onClick={handleBackClick} />
//       <div className="contenedorPrincipal__TyC">
//         <div className="contenedorCheckBox">
//           <div className="checkbox">
//             <input
//               type="checkbox"
//               id="privacyPolicy"
//               checked={termsAccepted.privacyPolicy}
//               onChange={handleCheckboxChange}
//             />
//             <label htmlFor="privacyPolicy">He leído y acepto la Política de privacidad*</label>
//           </div>

//           <div className="checkbox">
//             <input
//               type="checkbox"
//               id="termsConditions"
//               checked={termsAccepted.termsConditions}
//               onChange={handleCheckboxChange}
//             />
//             <label htmlFor="termsConditions">He leído y acepto los Términos y condiciones*</label>
//           </div>

//           <div className="checkbox">
//             <input
//               type="checkbox"
//               id="promotions"
//               checked={termsAccepted.promotions}
//               onChange={handleCheckboxChange}
//             />
//             <label htmlFor="promotions">Acepto que me envíen promociones y eventos a mi correo electrónico</label>
//           </div>
//         </div>

//         <img src={imagenBgInverse} alt="imagenBgInverse" className='imagenBgInverse' />
//         <img src={imagenBgCorner} alt="imagenBgCorner" className='imagenBgCorner' />

//         {/* Botón para registrarse */}
//         <Registrarse isDisabled={!canRegister} />
//       </div>
//     </>
//   );
// };

// export default TerminosCondiciones;