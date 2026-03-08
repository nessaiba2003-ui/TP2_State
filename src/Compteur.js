import { useState } from 'react';

function Compteur() {
  const [compte, setCompte] = useState(0);

  function incrementer() {
    setCompte(compte + 1);
  }

  return (
    <div>
      <p>Vous avez cliqué {compte} fois.</p>

      <button onClick={incrementer}>Incrémenter</button>
    
</div>
  );
}

export default Compteur;