import styles from "./empty.module.scss";

const Empty = () => {
  return (
    <div className={styles.emptyContainer}>
      Maalesef İçerik Yok.
      <a href="http://localhost:5173/create">Yeni Başvuru Yapın</a>
    </div>
  );
};

export default Empty;
