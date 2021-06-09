import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1>Grocery Store</h1>
            <p>Designed and built by <a href="https://github.com/y2k01">Pavlov Stanislav</a></p>
        </footer>
    )
}

export default Footer