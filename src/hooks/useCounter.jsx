import { useState } from "react";
import styles from "./useCounter.module.css";

const useCounter = (titulo) => {
  const [state, setState] = useState(0);

  const Contador = () => (
    <div className={styles.modal}>
      <h2>{titulo}</h2>
      <div className={styles.modalContainer}>
        <button onClick={() => setState(state - 1)}> - </button>
        <p className={styles.counter}>{state}</p>
        <button onClick={() => setState(state + 1)}> + </button>
      </div>
    </div>
  );
  return [Contador];
};

export default useCounter;
