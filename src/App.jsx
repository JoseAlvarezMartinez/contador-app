import styles from "./App.module.css";
import Montania from "./assets/pattern-hills.svg";
function App() {
  return (
    <header className={styles.header}>
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
