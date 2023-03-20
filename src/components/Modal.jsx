import styles from "./Modal.module.css";
import useCounter from "../hooks/useCounter";
import { useEffect } from "react";
const Modal = ({ setModal, setCronometro }) => {
  const [Horas, horas] = useCounter("Hours");
  const [Minutos, minutos] = useCounter("Minutes");
  const [Segundos, segundos] = useCounter("Seconds");

  useEffect(() => {
    setCronometro({
      horas,
      minutos,
      segundos,
    });
  }, [horas, minutos, segundos]);
  return (
    <div className={styles.modal}>
      <div className={styles.closeBtnContainer}>
        <div onClick={() => setModal(false)} className={styles.closeBtn}>
          X
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.modalBackground}>
          <Horas />
          <Minutos />
          <Segundos />
        </div>

        <button onClick={() => setModal(false)} className={styles.startBtn}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Modal;
