import styles from "./error.module.scss";

const Error = ({ message }) => {
  return (
    <div className={styles.errorContainer}>
      <p>❌ {message || "Bir hata oluştu!"}</p>
      <button onClick={() => window.location.reload()}>Tekrar Dene</button>
    </div>
  );
};

export default Error;
