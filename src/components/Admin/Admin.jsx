import styles from './Admin.module.css'
import React from "react";
import axios from "axios";

const Admin = (props) => {
    if (props.isLogged) {

        let pushProductToDatabase = (e) => {
            e.preventDefault()
            axios.post("https://60a0e51dd2855b00173b15c9.mockapi.io/products", {
                name: props.name,
                price: props.price,
                img: props.imageURL,
                type: props.productType
            })
                .then(response => {
                    console.log(response)
                    props.addProductToDatabase()
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
        <div className={styles.adminPage}>
            <h1>FORBIDDEN. ERROR 403</h1>
        </div>
    )
}

export default Admin