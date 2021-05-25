import styles from './Admin.module.css'
import React from "react";

const Admin = (props) => {

    if (props.isLogged) {
        return (
            <div>
                <p>add product to database</p>
                <form action="" className={styles.addProductForm}>
                    <label htmlFor="name">name</label>
                    <input type="text"/>
                    <label htmlFor="price">price</label>
                    <input type="text"/>
                    <label htmlFor="image">image URL</label>
                    <input type="text"/>
                    <label htmlFor="type">product type</label>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
    return (
        <div>
            FORBIDDEN. ERROR 403
        </div>
    )
}

export default Admin