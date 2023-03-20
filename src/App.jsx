import styles from "./App.module.css";
import Montania from "./assets/pattern-hills.svg";
import { useEffect, useState } from "react";
function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hourCard}>
          <h1 className={styles.h1}>{date.toLocaleTimeString()}</h1>
        </div>
      </div>
      <div className={styles.montaniaContainer}>
        <img
          className={styles.montania}
          src={Montania}
          alt="Imagen de la Montania"
        />
      </div>
    </header>
  );
}

export default App;
