import styles from "./Modal.module.css";
import useCounter from "../hooks/useCounter";
const Modal = ({ setModal }) => {
  const [Horas] = useCounter();
  return (
    <div className={styles.modal}>
      <div onClick={() => setModal(false)} className={styles.closeBtn}>
        X
      </div>
      <Horas />
    </div>
  );
};

export default Modal;
