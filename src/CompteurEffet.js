// src/CompteurEffet.js
import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compteur, setCompteur] = useState(0);

  // useEffect se déclenche à chaque changement de 'compteur'
  useEffect(() => {
    document.title = `Clics : ${compteur}`;
    
    // Fonction de nettoyage (optionnel)
    return () => {
      document.title = 'TP React';
    };
  }, [compteur]); // Tableau de dépendances

  const incrementer = () => {
    setCompteur(compteur + 1);
  };

  const decrementer = () => {
    setCompteur(compteur > 0 ? compteur - 1 : 0);
  };

  const reinitialiser = () => {
    setCompteur(0);
  };

  return (
    <div style={{ border: '2px solid #e74c3c', padding: '20px', margin: '20px 0', borderRadius: '10px' }}>
      <h2>🔢 Exercice 3 : Compteur avec useEffect</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Nombre de clics : <span style={{ color: '#e74c3c' }}>{compteur}</span>
      </p>
      <p style={{ fontSize: '12px', color: '#666' }}>
        👀 Regardez le titre de l'onglet du navigateur !
      </p>
      
      <div style={{ marginTop: '15px' }}>
        <button onClick={incrementer} style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px' }}>
          ➕ Ajouter
        </button>
        <button onClick={decrementer} style={{ padding: '10px 20px', marginRight: '10px', cursor: 'pointer', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '5px' }}>
          ➖ Retirer
        </button>
        <button onClick={reinitialiser} style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '5px' }}>
          🔄 Réinitialiser
        </button>
      </div>
    </div>
  );
}

export default CompteurEffet;