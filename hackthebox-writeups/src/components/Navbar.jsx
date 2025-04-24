import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link de React Router
import styles from './Navbar.module.css'; // Importa los estilos CSS

function Navbar() {
  return (
    <nav className={styles.navbar}> {/* Aplica la clase 'navbar' */}
      <div className={styles.logo}> {/* Aplica la clase 'logo' */}
        <Link to="/">HackTheBox Writeups</Link> {/* Enlace a la página principal */}
      </div>
      <ul className={styles.menu}> {/* Aplica la clase 'menu' */}
        <li>
          <Link to="/inicio">Inicio</Link>  {/* Enlace a la página de Inicio */}
        </li>
        <li>
          <Link to="/writeups">Writeups</Link> {/* Enlace a la página de la Lista de Writeups */}
        </li>
        <li>
          <Link to="/about">Acerca de</Link>  {/* Un ejemplo de otra página */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;