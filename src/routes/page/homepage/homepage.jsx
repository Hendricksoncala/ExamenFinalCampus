import React from 'react';
import styles from './homepage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import ensalada from "../../../assets/icon/ensalada.png"

import Vegetales from "../../../assets/icon/vegetales.png"
import Nuts from "../../../assets/icon/nuts.png"
import Protein from "../../../assets/icon/protein.png"
import Shakes from "../../../assets/icon/shakes.png"
import perfil from "../../../assets/icon/perfil.png"

const categories = [
    { path: '/Vegetables', name: 'Vegetables', Icon: Vegetales },
    { path: '/Nuts & Seeds', name: 'Nuts & Seeds', Icon: Nuts },
    { path: '/Protein', name: 'Protein', Icon: Protein },
    { path: '/Protein Shakes', name: 'Protein Shakes', Icon: Shakes },
    
  ];
  
  function HomePage() {
    return (
      <div className={styles.container}>

  
        <div className={styles.content}>
          <div className={styles.categoriasContainer}>
            <div className={styles.PerfilSuperior}>
              <img src={perfil} alt="Taller del mes"  />
              <h2>Hello, Sara!</h2>
            </div>
            <div className={styles.search}>
              <input type="search" placeholder="" />
            </div>
  
            <div className={styles.titulo}>
              <h2>Food Category</h2>
            </div>
  
            <div className={styles.gridContainer}>
              {categories.map((category, index) => (
                <Link key={index} to={`/categorias`} className={styles.categoriaItem}>

                    {/* Usamos img para cargar el icono */}
                    <img src={category.Icon} alt={category.name} className={styles.icon} /> 

                  <p>{category.name}</p>
                </Link>
              ))}
            </div>
          </div>
  
          <div className={styles.talleresMesContainer}>
            <div className={styles.header}>

              <p>¡Aprende cómo hacerlos en estos talleres educativos!</p>
            </div>
  
            <div className={styles.tallerImageContainer}>
              <img src={ensalada} alt="Taller del mes" className={styles.tallerImage} />
            </div>
  
            <button className={styles.inscribeteButton}>¡Inscríbete ahora!</button>
          </div>
        </div>
  

      </div>
    );
  }

  export default HomePage