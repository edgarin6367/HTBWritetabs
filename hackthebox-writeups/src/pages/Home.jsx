import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import writeups from '../data'; // Importa los datos (ajusta la ruta si es necesario)

function Home() {
  // Ordena los writeups por ID de forma descendente y toma los dos primeros
  const latestWriteups = [...writeups]
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>HackTheBox Writeups</h1>
        <p className="home-description">
          Encuentra guías detalladas y paso a paso para resolver máquinas de
          HackTheBox. Mejora tus habilidades de pentesting y aprende de la
          comunidad.
        </p>
        <Link to="/writeups" className="explore-button">
          Explorar Writeups
        </Link>
      </header>

      <section className="featured-section">
        <h2>Últimos Writeups</h2>
        <div className="featured-grid">
          {latestWriteups.map(writeup => (
            <div key={writeup.id} className="featured-card">
              <h3>{writeup.title}</h3>
              <p>{writeup.description}</p>
              <Link to={`/writeup/${writeup.id}`} className="featured-link">
                Leer más
              </Link>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default Home;