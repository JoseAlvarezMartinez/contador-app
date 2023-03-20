import styles from "./App.module.css";
import Montania from "./assets/pattern-hills.svg";
import { useEffect, useState } from "react";
function App() {
  const [date, setDate] = useState(new Date());
  const [cronometro, setCronometro] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });
  useEffect(() => {
    if (cronometro > 1) {
      alert("funca");
    }
  }, [cronometro]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hourCard}>
          {cronometro.length ? (
            <h1 className={styles.h1}>{date.toLocaleTimeString()}</h1>
          ) : (
            <h1 className={styles.h1}>{"00:00:00"}</h1>
            // <h1 className={styles.h1}>{date.toLocaleTimeString()}</h1>
          )}
        </div>
      </div>
      <div className={styles.montaniaContainer}>
        <img
          className={styles.montania}
          src={Montania}
          alt="Imagen de la Montania"
        />
      </div>
      <div className={styles.addBtn}>
        <p onClick={() => setCronometro(10)}>+</p>
      </div>
    </header>
  );
}

export default App;
