const [resultado, setResultado] = useState(0);

export function Resultado() {
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
