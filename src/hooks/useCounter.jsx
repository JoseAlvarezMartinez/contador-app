import { useState } from "react";

const useCounter = (contador) => {
  const [probando, setProbando] = useState(0);
  const Contador = () => (
    <div>
      <button> - </button>
      <p>{contador}</p>
      <button> + </button>
    </div>
  );
  return [Contador];
};

export default useCounter;
