import React, { useState } from 'react';
import { FaClipboard, FaCheck } from 'react-icons/fa';

const Resultado = ({ endereco }) => {
  const [copiado, setCopiado] = useState(false);

  const dados = `
Logradouro: ${endereco.logradouro}
Complemento: ${endereco.complemento || 'Não informado'}
Bairro: ${endereco.bairro}
Cidade: ${endereco.localidade}
Estado: ${endereco.uf}
`.trim();

  const copiarTexto = () => {
    navigator.clipboard.writeText(dados);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <section className="mt-6 bg-indigo-50 p-5 rounded-xl shadow-md text-sm text-gray-800 animate-fade-in transition-all duration-500 ease-in-out">
      <h2 className="text-base font-semibold text-indigo-700 mb-3">
        📬 Resultado da Busca
      </h2>

      <ul className="space-y-1">
        <li><strong>📍 Logradouro:</strong> {endereco.logradouro}</li>
        <li><strong>➕ Complemento:</strong> {endereco.complemento || 'Não informado'}</li>
        <li><strong>🏘️ Bairro:</strong> {endereco.bairro}</li>
        <li><strong>🌆 Cidade:</strong> {endereco.localidade}</li>
        <li><strong>🗺️ Estado:</strong> {endereco.uf}</li>
      </ul>

      <button
        onClick={copiarTexto}
        className="mt-5 w-full bg-emerald-600 text-white font-medium py-2 rounded-md 
        hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 animate-zoom-in"
      >
        {copiado ? (
          <>
            <FaCheck /> Copiado!
          </>
        ) : (
          <>
            <FaClipboard /> Copiar Endereço
          </>
        )}
      </button>
    </section>
  );
};

export default Resultado;
