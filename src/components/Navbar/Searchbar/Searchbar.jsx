import React from "react";
import styles from './Searchbar.module.scss'
import {Redirect} from "react-router-dom";

const Searchbar = (props) => {
    const checkKey = (e) => {
        if (e.key === 'Enter' && props.searchField) {
            props.setSearchText()
            props.toggleIsRedirecting(true)
        }
    }

    const onSearchFieldChange = (e) => {
        props.onSearchFieldChange(e.target.value)
    }

    if (!props.isSearchbarToggled) return <></>
    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                className={styles.inputField}
                placeholder="SEARCH PRODUCTS"
                onChange={onSearchFieldChange}
                value={props.searchField}
                onKeyUp={checkKey}
            />
            {props.isRedirecting && <Redirect to={'/search/' + props.searchField}/>}
        </div>
    )
}

export default Searchbar
