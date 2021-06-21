import React from "react";
import styles from './Searchbar.module.css'


const Searchbar = (props) => {

    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="SEARCH PRODUCTS"
            />
        </div>
    )
}

export default Searchbar