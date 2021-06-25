import styles from './AdminPage.module.css'
import React from "react";
import {productsAPI} from "../../api/api";

const AdminPage = (props) => {
    if (props.isLogged) {

        let pushProductToDatabase = (e) => {
            e.preventDefault()
            productsAPI.postProduct(props.name, props.price, props.imageURL, props.type)
                .then(response => {
                    console.log(response)
                    props.nullifyFields()
                })
        }
        return (
            <section className={styles.adminPage}>
                <p>add product to database</p>
                <form action="" className={styles.addProductForm} onSubmit={pushProductToDatabase}>
                    <input type="text" name="name" placeholder="title" className={styles.inputField} onChange={props.onProductNameChange} value={props.name}/>
                    <input type="text" name="price" placeholder="price" className={styles.inputField} onChange={props.onProductPriceChange} value={props.price}/>
                    <input type="text" name="image" placeholder="image URL" className={styles.inputField} onChange={props.onProductImageURLChange} value={props.imageURL}/>
                    <input type="text" name="type" placeholder="product type" className={styles.inputField} onChange={props.onProductTypeChange} value={props.productType}/>
                    <input type="submit" value="POST" className={styles.postButton}/>
                </form>
            </section>
        )
    }
    return (
        <div className={styles.errorPage}>
            <h1>403</h1>
            <h2>FORBIDDEN</h2>
            <p>access to this resource is denied!</p>
        </div>
    )
}

export default AdminPage