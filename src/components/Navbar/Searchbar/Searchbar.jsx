import React, {useState} from "react";
import styles from './Searchbar.module.css'
import {Redirect, useLocation} from "react-router-dom";
import {productsAPI} from "../../../api/api";

const Searchbar = (props) => {
    let checkKey = (e) => {
        if (e.key === 'Enter') {
            props.toggleIsSearching(true)
        }
    }

    let onSearchFieldChange = (e) => {
        props.onSearchFieldChange(e.target.value)
    }
    return (
        <div>
            <div className={props.isSearchbarToggled ? styles.active : styles.hidden}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="SEARCH PRODUCTS"
                    onChange={onSearchFieldChange}
                    value={props.searchField}
                    onKeyUp={checkKey}
                />
                {props.isSearching && <Redirect to={'/search/' + props.searchField}/>}
            </div>
        </div>
    )
}

export default Searchbar