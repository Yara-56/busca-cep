import React from 'react';

const MensagemErro = ({ texto }) => {
  return (
    <p className="text-red-600 mt-3 text-sm text-center animate-slide-up transition-opacity duration-300">
      {texto}
    </p>
  );
};

export default MensagemErro;
