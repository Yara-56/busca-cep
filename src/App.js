import React, { useState } from 'react';
import './App.css';
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
    <div className="container">
      <h1>Busca de CEP</h1>
      <InputCEP cep={cep} setCep={setCep} onBuscar={buscarCep} />
      {erro && <MensagemErro texto={erro} />}
      {endereco && <Resultado endereco={endereco} />}
    </div>
  );
}

export default App;
