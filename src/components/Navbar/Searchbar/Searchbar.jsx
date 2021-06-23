import React, {useState} from "react";
import styles from './Searchbar.module.css'
import {Redirect} from "react-router-dom";
import {productsAPI} from "../../../api/api";

const Searchbar = (props) => {
    const [search, setSearch] = useState(false)
    let checkKey = (e) => {
        if (e.key === 'Enter') {
            searchProducts()
        }
    }
    let searchProducts = () => {
        setSearch(true)
        productsAPI.searchProducts(props.searchField)
            .then(response => {
                props.setProducts(response)
                setSearch(false)
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
                {search && <Redirect to='/search'/>}
            </div>
        </div>
    )
}

export default Searchbar