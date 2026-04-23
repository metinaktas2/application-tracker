import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p>Yükleniyor...</p>
    </div>
  );
};

export default Loader;
