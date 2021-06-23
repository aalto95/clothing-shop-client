import React, {useState} from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";
import {productsAPI} from "../../../api/api";

const Searchbar = (props) => {
    let checkKey = (e) => {
        if (e.key === 'Enter') {
            searchProducts()
        }
    }
    let searchProducts = () => {
        props.toggleIsSearching(true)
        console.log(props.isSearching)
        productsAPI.searchProducts(props.searchField)
            .then(response => {
                console.log(props.isSearching)
                props.setProducts(response)
                props.toggleIsSearching(false)
            })
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
                {props.isSearching && <Redirect to='/search'/>}
            </div>
        </div>
    )
}

export default Searchbar