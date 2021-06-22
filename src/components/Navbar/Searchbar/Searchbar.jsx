import React from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";

const Searchbar = (props) => {
    let checkKey = (e) => {
        if (e.key === 'Enter') {

        }
    }
    return (
        <div>
            <div className={props.isSearchbarToggled ? styles.active : styles.hidden}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="SEARCH PRODUCTS"
                    onChange={props.onSearchFieldChange}
                    onKeyUp={checkKey}
                />
                {<Redirect to='/search'/>}
            </div>
        </div>
    )
}

export default Searchbar