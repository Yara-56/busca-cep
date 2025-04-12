import React, { useState } from 'react';
import './index.css';
import InputCEP from './components/InputCEP';
import Resultado from './components/Resultado';
import MensagemErro from './components/MensagemErro';

function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = async () => {
    const cepLimpo = cep.replace(/\D/g, '');
  
    if (!/^\d{8}$/.test(cepLimpo)) {
      setErro('CEP inválido. Digite exatamente 8 números.');
      setEndereco(null);
      return;
    }
  
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
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
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <section className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-600 tracking-wide drop-shadow-sm">
            📦 Localize seu Endereço pelo CEP
          </h1>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            Seja muito bem-vindo(a) ao <strong className="text-indigo-600">Busca CEP</strong>!<br />
            Descubra seu endereço completo digitando o número do CEP abaixo.
            <br />
            <span className="block mt-1">
              ❓ Não sabe seu CEP? <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Consulte no site dos Correios
              </a>.
            </span>
          </p>
        </header>

        <InputCEP cep={cep} setCep={setCep} onBuscar={buscarCep} />

        {erro && <MensagemErro texto={erro} />}
        {endereco && <Resultado endereco={endereco} />}
      </section>

      <footer className="mt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Busca CEP • Todos os direitos reservados
      </footer>
    </main>
  );
}

export default App;
