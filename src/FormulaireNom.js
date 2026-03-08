import { useState } from 'react';

function FormulaireNom() {
  const [nom, setNom] = useState('');

  function handleChange(event) {
    setNom(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Le nom saisi est : ${nom}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type="text" value={nom} onChange={handleChange} />
      </label>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireNom;