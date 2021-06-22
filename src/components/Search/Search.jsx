import styles from './Search.module.css';
import {productsAPI} from "../../api/api";
import {useEffect, useState} from "react";

const Search = (props) => {
    useEffect(props.toggleSearchbar, [])
    return (
        <>
            <div className={styles.searchPage}>
                <p>There are {props.groceries.length} matches</p>
            </div>
        </>
    )

}

export default Search