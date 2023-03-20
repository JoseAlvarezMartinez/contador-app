import styles from "./App.module.css";
import Montania from "./assets/pattern-hills.svg";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
function App() {
  const [date, setDate] = useState(new Date());
  const [cronometro, setCronometro] = useState({horas:0,minutos:0,segundos:0});
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  });

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
      <div className={styles.addBtnContainer}>
        <div onClick={() => setModal(true)} className={styles.addBtn}>
          +
        </div>
      </div>
      {modal && <Modal setModal={setModal} setCronometro={setCronometro}/>}
    </header>
  );
}

export default App;
