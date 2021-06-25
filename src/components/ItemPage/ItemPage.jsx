import React from "react";
import styles from './ItemPage.module.css'
import Preloader from "../Preloader/Preloader";

const ItemPage = (props) => {
    let item = props.specificItem
    let newObj = Object.assign({}, item.sizes)
    let options = []
    for (const [key, value] of Object.entries(newObj)) {
        options.push(<option value={value} key={key}>{key}</option>)
    }

    return (
        <div className={styles.itemPage}>
            {
                !props.isFetching
                    ? <div className={styles.item}>
                        <img src={props.specificItem.img_big} alt="item-img" className={styles.itemImage}/>
                        <div className={styles.infoBlock}>
                            <p>Brand: {item.brand}</p>
                            <p>Title: {item.title}</p>
                            <p>Color: {item.color}</p>
                            <p>Price: {item.price}$</p>
                            <p>Select Size:</p>
                            <select name="sizes">
                                {options}
                            </select>
                        </div>
                    </div>
                    : <Preloader/>
            }
        </div>
    )
}

export default ItemPage