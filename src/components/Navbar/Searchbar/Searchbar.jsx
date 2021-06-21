import React from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";

const Searchbar = (props) => {
    console.log(props.isFetching)
    let checkKey = (e) => {
        if (e.key === 'Enter') {
            props.toggleIsFetching(true)
        }
    }
    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="SEARCH PRODUCTS"
                onKeyUp={checkKey}
            />

            {props.isFetching && <Redirect to='/search-results'/>}
        </div>
    )
}

export default Searchbar