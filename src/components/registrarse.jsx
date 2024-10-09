import React from "react";
import arrowContinueIcon from '../assets/icon/arrowContinue.svg';
import { Link } from "react-router-dom";

const Registrarse = ({ isTermsAccepted }) => {
    return (
        <div style={styles.container}>
            <img style={styles.icon} src={arrowContinueIcon} alt="" />
            <p>
                {/* Condición para habilitar el enlace */}
                {isTermsAccepted ? (
                    <Link to="/loginRuraq" style={styles.link}>
                        Registrarse
                    </Link>
                ) : (
                    <span style={styles.disabledLink}>Registrarse</span>
                )}
            </p>
        </div>
    );
};

// Estilos como antes
const styles = {
    container: {
        display: 'flex',
        position: 'fixed',
        bottom: '10px',
        right: '2rem',
        zIndex: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    disabledLink: {
        color: 'gray',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    icon: {
        width: '3vw',
        paddingRight: '.4rem',
    }
};

export default Registrarse;