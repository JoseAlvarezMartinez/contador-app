import { useState } from "react";
import styles from "./useCounter.module.css";
const useCounter = () => {
  const [state, setState] = useState(0);
  const Contador = () => (
    <div>
      <button onClick={() => setState(state - 1)}> - </button>
      <p className={styles.counter}>{state}</p>
      <button onClick={() => setState(state + 1)}> + </button>
    </div>
  );
  return [Contador];
};

export default useCounter;
