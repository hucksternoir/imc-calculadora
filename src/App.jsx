import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [wasClicked, setWasClicked] = useState(false);
  const [resultado, setResultado] = useState(0);

  function reset() {
    setAltura("");
    setPeso("");
    setWasClicked(false);
  }

  function Resultado() {
    if (wasClicked) {
      return (
        <div className="resultadoCaixa">
          <p>O resultado do seu IMC é {resultado}</p>
        </div>
      );
    } else {
      return <></>;
    }
  }

  function calcula() {
    setResultado((peso / (altura * altura)).toFixed(2));
    // if (resultado < 18.5) {
    //   document.querySelector(".tabela1").style.backgroundColor = "blue";
    // }
    // if (resultado > 18.5 && resultado < 24.9) {
    //   document.querySelector(".tabela2").style.backgroundColor = "blue";
    // }
    // if (resultado > 24.9 && resultado < 29.9) {
    //   document.querySelector(".tabela3").style.backgroundColor = "blue";
    // }
    // if (resultado > 29.9 && resultado < 39.9) {
    //   document.querySelector(".tabela4").style.backgroundColor = "blue";
    // }
    // if (resultado > 39.9) {
    //   document.querySelector(".tabela5").style.backgroundColor = "blue";
    // }
    setWasClicked(true);
  }

  function Tabela() {
    return (
      <div className="tableDiv">
        <table>
          <thead>
            <tr>
              <td>IMC</td>
              <td>CLASSIFICAÇÃO</td>
              <td>GRAU DE OBESIDADE</td>
            </tr>
          </thead>
          <tr className="tabela1">
            <td>MENOR QUE 18,5</td>
            <td>MAGREZA</td>
            <td className="grau">0</td>
          </tr>
          <tr className="tabela2">
            <td>ENTRE 18,5 E 24,9</td>
            <td>NORMAL</td>
            <td className="grau">0</td>
          </tr>
          <tr className="tabela3">
            <td>ENTRE 25,0 E 29,9</td>
            <td>SOBREPESO</td>
            <td className="grau">I</td>
          </tr>
          <tr className="tabela4">
            <td>ENTRE 30 E 39,9</td>
            <td>OBESIDADE</td>
            <td className="grau">II</td>
          </tr>
          <tr className="tabela5">
            <td>MAIOR QUE 40</td>
            <td>OBESIDADE GRAVE</td>
            <td className="grau">III</td>
          </tr>
        </table>
      </div>
    );
  }
  return (
    <main>
      <h1>Calculadora IMC</h1>
      <div className="inputFlex">
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Digite seu peso"
        />

        <input
          value={altura}
          type="number"
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Digite sua altura"
        />
      </div>
      <div className="btnFlex">
        <button onClick={reset} id="reset">
          Reset
        </button>
        <button onClick={calcula} id="calcula">
          Calcular
        </button>
      </div>
      <Resultado />
      <Tabela />
    </main>
  );
}

export default App;
