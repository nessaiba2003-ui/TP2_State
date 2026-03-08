// src/FormulaireInscription.js
import { useState } from 'react';

function FormulaireInscription() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    if (prenom.trim() === '' || email.trim() === '') {
      alert('⚠️ Veuillez remplir tous les champs !');
      return;
    }

    alert(`✅ Inscription réussie !\n\nPrénom : ${prenom}\nEmail : ${email}`);
    
    // Réinitialiser le formulaire
    setPrenom('');
    setEmail('');
  };

  return (
    <div style={{ border: '2px solid #2ecc71', padding: '20px', margin: '20px 0', borderRadius: '10px' }}>
      <h2>📝 Exercice 2 : Formulaire d'Inscription</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Prénom : 
            <input
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="Votre prénom"
              style={{ marginLeft: '10px', padding: '8px', width: '200px' }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>
            Email : 
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              style={{ marginLeft: '10px', padding: '8px', width: '200px' }}
            />
          </label>
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px' }}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}

export default FormulaireInscription;