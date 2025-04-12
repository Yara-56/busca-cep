// Componente InputCEP.jsx com máscara, mobile-first, animação e pattern corrigido
import React, { useEffect, useRef } from 'react';
import IMask from 'imask';
import { FaSearchLocation } from 'react-icons/fa';

const InputCEP = ({ cep, setCep, onBuscar, carregando }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: '00000-000',
      });

      mask.on('accept', () => {
        setCep(mask.value);
      });

      return () => mask.destroy();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full px-4 sm:px-0 mb-6 animate-fade-in">
      <label htmlFor="cep" className="block text-sm text-gray-700 font-medium mb-2">
        Digite seu CEP:
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="cep"
          ref={inputRef}
          type="tel"
          inputMode="numeric"
          pattern="\d{5}-\d{3}"
          className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ex: 30140-071"
          required
        />
        <button
          type="submit"
          disabled={carregando}
          className={`w-full sm:w-auto px-4 py-2 rounded-lg flex justify-center items-center gap-2 text-white font-medium transition
            ${carregando ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 animate-gentle-bounce'}`}
        >
          {carregando ? <span className="animate-pulse">Buscando...</span> : <><FaSearchLocation /> Buscar</>}
        </button>
      </div>
    </form>
  );
};

export default InputCEP;