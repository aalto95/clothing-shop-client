import styles from "./Preloader.module.scss";
import React from "react";

const Preloader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ldsDualRing}></div>
    </div>
  );
};

export default Preloader;
