// src/ClicDynamic.js
import { useState } from 'react';

function ClicDynamic() {
  const [clics, setClics] = useState(0);

  const textes = [
    "Premier clic",
    "Deuxième clic",
    "Troisième clic",
    "Quatrième clic",
    "Cinquième clic",
    "Continuez comme ça ! 🎉"
  ];

  const handleClick = () => {
    setClics(clics + 1);
  };

  const texteAffiche = clics > 0 ? textes[Math.min(clics - 1, textes.length - 1)] : "Cliquez pour commencer";

  return (
    <div style={{ border: '2px solid #3498db', padding: '20px', margin: '20px 0', borderRadius: '10px' }}>
      <h2>🖱️ Exercice 1 : Affichage Dynamique</h2>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{texteAffiche}</p>
      <p>Nombre de clics : <strong>{clics}</strong></p>
      <button onClick={handleClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Cliquer ici
      </button>
    </div>
  );
}

export default ClicDynamic;