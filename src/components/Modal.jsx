import styles from "./Modal.module.css";
import useCounter from "../hooks/useCounter";
const Modal = ({ setModal }) => {
  const [Horas] = useCounter("Hours");
  const [Minutos] = useCounter("Minutes");
  const [Segundos] = useCounter("Seconds");
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

        <div>
          <button className={styles.startBtn}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
