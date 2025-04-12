const InputCEP = ({ cep, setCep, onBuscar }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm text-gray-700 font-medium mb-1">Digite seu CEP:</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Ex: 30140071"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
          maxLength={8}
        />
        <button
          className="mt-3 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={onBuscar}
        >
          Buscar
        </button>
      </div>
    );
  };
  
  export default InputCEP;
  