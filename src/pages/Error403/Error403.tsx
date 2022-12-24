import React from "react";
import styles from "./Error403.module.scss";

const Error403: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <h1>403</h1>
      <h2>FORBIDDEN</h2>
      <p>access to this resource is denied!</p>
    </div>
  );
};

export default Error403;
