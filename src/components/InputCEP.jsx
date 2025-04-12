import React from 'react';

const InputCEP = ({ cep, setCep, onBuscar }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Digite o CEP (somente números)"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        maxLength={8}
      />
      <button onClick={onBuscar}>Buscar</button>
    </>
  );
};

export default InputCEP;
