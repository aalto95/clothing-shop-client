import React from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";

const Searchbar = (props) => {
    let checkKey = (e) => {
        if (e.key === 'Enter') {
            //props.toggleIsFetching(true)
        }
    }
    return (
        <div className={styles.wrapper}>
            <div className={props.isSearchbarToggled ? styles.active : styles.hidden}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="SEARCH PRODUCTS"
                    onKeyUp={checkKey}
                />

                {props.isFetching && <Redirect to='/search-results'/>}
            </div>
        </div>
    )
}

export default Searchbar