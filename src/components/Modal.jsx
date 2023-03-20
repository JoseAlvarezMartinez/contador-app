import styles from "./Modal.module.css";
const Modal = ({ setModal }) => {
  return (
    <div className={styles.modal}>
      <div onClick={() => setModal(false)} className={styles.closeBtn}>
        X
      </div>

    </div>
  );
};

export default Modal;
