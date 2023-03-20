import styles from "./App.module.css";
import Montania from "./assets/pattern-hills.svg";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [tiempoInicial, setTiempoInicial] = useState(3600);
  const [tiempoActual, setTiempoActual] = useState(tiempoInicial);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTiempoActual((tiempoActual) => tiempoActual - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const horas = Math.floor(tiempoActual / 3600);
  const minutos = Math.floor((tiempoActual % 3600) / 60);
  const segundos = tiempoActual % 60;
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.hourCard}>
          <h1>
            {horas < 10 ? `0${horas}` : horas}:
            {minutos < 10 ? `0${minutos}` : minutos}:
            {segundos < 10 ? `0${segundos}` : segundos}
          </h1>
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
