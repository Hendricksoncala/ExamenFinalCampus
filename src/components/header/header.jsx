import React, { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';
import NavLateral from '../navLateral/navLateral';
import menuver from '../../assets/icon/menuVector.svg';
import lupa from '../../assets/icon/lupa.svg';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const NavLateralRef = useRef(null);

  const handleClickOutside = (event) => {
    // Si el clic fue fuera del NavLateral y no en el botón, oculta el componente
    if (NavLateralRef.current && !NavLateralRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Añade el manejador de clic al hacer click en cualquier lugar de la página
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Limpia el evento al desmontar el componente o cambiar la visibilidad
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <header className={styles.HeaderyHeader}>
        <div className={styles.HeaderyIcon} onClick={() => setIsVisible(true)}>
          <img src={menuver} alt="menu" />
          <img src={menuver} alt="menu" />
          <img src={menuver} alt="menu" />
        </div>
        <div className={styles.HeaderyInput}>
          <img src={lupa} alt="lupa" />
          <input
            type="search"
            placeholder="Buscar producto o tienda..."
            className={styles.HeaderyInputSearch}
          ></input>
        </div>
      </header>
      {isVisible && (
        <div ref={NavLateralRef}>
          <NavLateral />
        </div>
      )}
    </>
  );
}

export default App;