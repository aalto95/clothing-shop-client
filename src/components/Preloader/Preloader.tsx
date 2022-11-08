import styles from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default Preloader;
