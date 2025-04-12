import React, { useState } from 'react';
import InputCEP from './components/InputCEP';
import Resultado from './components/Resultado';
import MensagemErro from './components/MensagemErro';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = async () => {
    if (!/^\d{8}$/.test(cep)) {
      setErro('CEP inválido. Digite exatamente 8 números.');
      setEndereco(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado.');
        setEndereco(null);
      } else {
        setEndereco(data);
        setErro('');
      }
    } catch (err) {
      setErro('Erro ao buscar o CEP. Verifique sua conexão.');
      setEndereco(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">🔍 Busca CEP</h1>
        <p className="text-sm text-gray-600 text-center mb-4">
          Seja bem-vindo(a) ao <strong>Busca CEP</strong>! Digite seu CEP abaixo para descobrir seu endereço completo.
          <br />
          Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noreferrer" className="text-blue-500 underline">Clique aqui para procurar no site dos Correios</a>.
        </p>

        <InputCEP cep={cep} setCep={setCep} onBuscar={buscarCep} />

        {erro && <MensagemErro texto={erro} />}
        {endereco && <Resultado endereco={endereco} />}
      </div>
    </div>
  );
}

export default App;
