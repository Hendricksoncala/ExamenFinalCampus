import React from 'react';
import arrowIcon from '../assets/icon/arrow.svg';
import rectangle from '../assets/icon/Rectangle.svg';

const Flechita = ({ onClick }) => {
  return (
    <div onClick={onClick} style={styles.container}>
      <div style={styles.rectangulo}>
        <img src={rectangle} alt="fondo-rectangulo" style={styles.fondo} />
        <img src={arrowIcon} alt="flechitakawai" style={styles.flecha} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    cursor: 'pointer',
    zIndex: '1',
  },
  rectangulo: {
    position: 'relative',
    display: 'inline-block',
  },
  fondo: {
    width: '10vw',
    height: 'auto',
  },
  flecha: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1.4rem',
    height: 'auto',
  },
};

export default Flechita;