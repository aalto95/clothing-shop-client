import React from "react";
import styles from './ItemPage.module.scss'
import Preloader from "../../components/Preloader/Preloader";

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
                        <img src={item.img_big} alt="item-img" className={styles.itemImage}/>
                        <div className={styles.infoBlock}>
                            <h2>{item.brand}</h2>
                            <p>{item.color} {item.title}</p>
                            <h5>Select Size:</h5>
                            <select name="sizes">
                                {options}
                            </select>
                            <h2>{item.price}$</h2>
                            <button className={styles.addToCart} onClick={props.addToCart}>Add To Cart</button>
                        </div>
                    </div>
                    : <Preloader/>
            }
        </div>
    )
}

export default ItemPage