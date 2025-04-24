import React, { useState } from 'react';
import writeups from '../data';
import './Writeups.css';
import { Link } from 'react-router-dom'; // Importa Link

function Writeups() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWriteups = writeups.filter(writeup => 
    writeup.title.toLowerCase().startsWith(searchTerm.toLowerCase()) || 
    writeup.machine.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Writeups</h1>
      <input 
        type="text" 
        placeholder="Buscar writeup..." 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <main className="writeups-grid">
        {filteredWriteups.map(writeup => (
          <div key={writeup.id} className="card">
            <div className="card-icon">
              {writeup.title}
            </div>
            <div className="card-details">
              <p className="card-machine">Máquina: {writeup.machine}</p>
              <p className="card-description">{writeup.description}</p>
            </div>
            <Link to={`/writeup/${writeup.id}`} className="read-more-button">
              Leer más
            </Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Writeups;