// Importamos dois hooks importantes do React
// useState → guarda um estado (valor que muda na tela)
// useEffect → executa código quando o componente é carregado
import { useState, useEffect } from "react";

function Typewriter({ text, speed = 60 }) {

  // Estado que guarda o texto que já foi "digitado"
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {

    // índice que controla quantas letras já apareceram
    let index = 0;

    // setInterval executa um código a cada X milissegundos
    const interval = setInterval(() => {

      // slice pega parte do texto
      // exemplo: "React".slice(0,2) = "Re"
      setDisplayedText(text.slice(0, index));

      // aumenta o índice para mostrar a próxima letra
      index++;

      // quando terminar o texto, para o intervalo
      if (index > text.length) {
        clearInterval(interval);
      }

    }, speed); // velocidade da digitação

    // função de limpeza do React
    // evita bugs quando o componente desmonta
    return () => clearInterval(interval);

  }, [text, speed]);

  return (

    // classe Tailwind que define a cor do texto
    // você pode trocar por:
    // text-green-400
    // text-cyan-400
    // text-purple-400
    <span className="text-primary">

      {displayedText}

    </span>
  );
}

export default Typewriter;