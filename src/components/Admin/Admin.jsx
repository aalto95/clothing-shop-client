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
            <div>
                <p>add product to database</p>
                <form action="" className={styles.addProductForm} onSubmit={pushProductToDatabase}>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" onChange={props.onProductNameChange} value={props.name}/>
                    <label htmlFor="price">price</label>
                    <input type="text" name="price" onChange={props.onProductPriceChange} value={props.price}/>
                    <label htmlFor="image">image URL</label>
                    <input type="text" name="image" onChange={props.onProductImageURLChange} value={props.imageURL}/>
                    <label htmlFor="type">product type</label>
                    <input type="text" name="type" onChange={props.onProductTypeChange} value={props.productType}/>
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