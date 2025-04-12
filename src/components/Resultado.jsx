import React from 'react';

const Resultado = ({ endereco }) => {
  return (
    <div className="resultado">
      <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
      <p><strong>Complemento:</strong> {endereco.complemento || 'Não informado'}</p>
      <p><strong>Bairro:</strong> {endereco.bairro}</p>
      <p><strong>Cidade:</strong> {endereco.localidade}</p>
      <p><strong>Estado:</strong> {endereco.uf}</p>
    </div>
  );
};

export default Resultado;
