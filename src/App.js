import React, { useState } from 'react';
import './App.css';

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
      setErro('Erro ao buscar o CEP. Tente novamente.');
      setEndereco(null);
    }
  };

  return (
    <div className="container">
      <h1>Busca de CEP</h1>
      <input
        type="text"
        placeholder="Digite o CEP (somente números)"
        value={cep}
        onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
        maxLength={8}
      />
      <button onClick={buscarCep}>Buscar</button>

      {erro && <p className="erro">{erro}</p>}

      {endereco && (
        <div className="resultado">
          <p><strong>Logradouro:</strong> {endereco.logradouro}</p>
          <p><strong>Complemento:</strong> {endereco.complemento || 'Não informado'}</p>
          <p><strong>Bairro:</strong> {endereco.bairro}</p>
          <p><strong>Cidade:</strong> {endereco.localidade}</p>
          <p><strong>Estado:</strong> {endereco.uf}</p>
        </div>
      )}
    </div>
  );
}

export default App;
