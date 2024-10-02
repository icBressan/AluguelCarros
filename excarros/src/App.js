import './App.css'; 
import { useState } from "react";

function App() {
  // Objetos dos carros disponíveis
  const sedan = { nome: "Sedan", preco: 150.0 };
  const suv = { nome: "SUV", preco: 200.0 };
  const economico = { nome: "Econômico", preco: 100.0 };
  const conversivel = { nome: "Conversível", preco: 300.0 };
  const picape = { nome: "Picape", preco: 250.0 };
  const esportivo = { nome: "Esportivo", preco: 400.0 };

  // Tabela de carros
  const carros = [sedan, suv, economico, conversivel, picape, esportivo];

  // Opções adicionais para o aluguel
  const nenhum = { nome: "Nenhum", preco: 0.0 };
  const gps = { nome: "GPS", preco: 15.0 };
  const seguro = { nome: "Seguro", preco: 50.0 };
  const cadeira = { nome: "Cadeira para Criança", preco: 20.0 };
  const motorista = { nome: "Motorista", preco: 100.0 };
  const gpsSeguro = { nome: "GPS + Seguro", preco: 60.0 };
  const motoristaSeguro = { nome: "Motorista + Seguro", preco: 140.0 };

  // Tabela de adicionais
  const adicionais = [nenhum, gps, seguro, cadeira, motorista, gpsSeguro, motoristaSeguro];

  // Declaração dos estados para armazenar valores selecionados
  const [carroSelecionado, setCarroSelecionado] = useState(0); // Carro selecionado
  const [adicionalSelecionado, setAdicionalSelecionado] = useState(0); // Opcional selecionado
  const [dias, setDias] = useState(0); // Número de dias de aluguel
  const [resultado, setResultado] = useState(null); // Resultado do cálculo final

  // Função para calcular o valor total do aluguel
  function Calcular() {
    const carro = carros[carroSelecionado];
    const adicional = adicionais[adicionalSelecionado];

    // Validação: verificar se um carro foi selecionado e o número de dias é válido
    if ((Number(carroSelecionado) < 0) || (dias <= 0)) {
      setResultado(
        <div className='resultado'>
          Selecione um carro e o número de dias para continuar!
        </div>
      );
    } else {
      // Calcular o total do aluguel
      const totalCarro = Number(carro.preco * dias);
      const totalAdicional = Number(adicional.preco * dias);
      const totalFinal = totalCarro + totalAdicional;

      // Exibir o resultado do pedido
      setResultado(
        <div className='resultado'>
          Carro: {carro.nome} <br />
          Valor Diário: R${carro.preco.toFixed(2)} <br />
          Opcional: {adicional.nome} <br />
          Valor do Opcional: R${adicional.preco.toFixed(2)} <br />
          Número de Dias: {dias} <br />
          Total: R${totalFinal.toFixed(2)}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Calculadora de Aluguel de Carro</h1>

      <div className="container">
        {/* Tabela de carros */}
        <div>
          <h3>Modelos de Carro</h3>
          <table>
            <thead>
              <tr>
                <th>Nome do Carro</th>
                <th>Valor Diário (R$)</th>
              </tr>
            </thead>
            <tbody>
              {carros.map((carro, indice) => (
                <tr key={indice}>
                  <td>{carro.nome}</td>
                  <td>R${carro.preco.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tabela de adicionais */}
        <div>
          <h3>Opções Adicionais</h3>
          <table>
            <thead>
              <tr>
                <th>Nome do Opcional</th>
                <th>Preço Diário (R$)</th>
              </tr>
            </thead>
            <tbody>
              {adicionais.map((adicional, indice) => (
                <tr key={indice}>
                  <td>{adicional.nome}</td>
                  <td>R${adicional.preco.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulário de aluguel */}
      <div className="formulario">
        <h3>Formulário de Aluguel</h3>
        <form>
          <p>
            Escolha o carro: <br />
            <select onChange={(e) => setCarroSelecionado(e.target.value)}>
              <option value="-1">Selecione um carro</option>
              {carros.map((carro, indice) => (
                <option key={indice} value={indice}>
                  {carro.nome} - R${carro.preco.toFixed(2)}
                </option>
              ))}
            </select>
          </p>

          <p>
            Escolha uma opção adicional: <br />
            <select onChange={(e) => setAdicionalSelecionado(e.target.value)}>
              <option value="-1">Selecione um opcional</option>
              {adicionais.map((adicional, indice) => (
                <option key={indice} value={indice}>
                  {adicional.nome} - R${adicional.preco.toFixed(2)}
                </option>
              ))}
            </select>
          </p>

          <p>
            Digite o número de dias: <br />
            <input
              type="number"
              value={dias}
              onChange={(e) => setDias(e.target.value)}
            />
          </p>

          <p>
            <input
              type="button"
              value="Calcular Aluguel"
              onClick={Calcular}
            />
          </p>
        </form>

        {/* Exibição do resultado */}
        {resultado}
      </div>
    </div>
  );
}

export default App;
