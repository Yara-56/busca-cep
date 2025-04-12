import { useEffect, useRef } from 'react';
import IMask from 'imask';
import { FaSearchLocation } from 'react-icons/fa';

const InputCEP = ({ cep, setCep, onBuscar }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const mask = IMask(inputRef.current, {
        mask: '00000-000',
      });

      mask.on('accept', () => {
        setCep(mask.value);
      });

      return () => mask.destroy(); // limpar ao desmontar
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label htmlFor="cep" className="block text-sm text-gray-700 font-medium mb-1">
        Digite seu CEP:
      </label>
      <div className="flex items-center gap-2">
        <input
          id="cep"
          ref={inputRef}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Ex: 30140-071"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-1"
        >
          <FaSearchLocation /> Buscar
        </button>
      </div>
    </form>
  );
};

export default InputCEP;
