import React from "react";
import styles from './ItemPage.module.scss'
import Preloader from "../../components/Preloader/Preloader";
import { Item } from '../../models/types'

interface Props {
    specificItem: Item | null;
    isFetching: boolean
    addToCart: React.MouseEventHandler<HTMLButtonElement>
}

const ItemPage: React.FC<Props> = (props) => {
    let newObj = Object.assign({}, props.specificItem?.sizes)
    let options = []
    for (const [key, value] of Object.entries(newObj)) {
        //@ts-ignore
        options.push(<option value={value} key={key}>{key}</option>)
    }

    return (
        <div className={styles.itemPage}>
            <div className={styles.item}>
                <img src={props.specificItem?.img_big} alt="item-img" className={styles.itemImage}/>
                <div className={styles.infoBlock}>
                    <h2>{props.specificItem?.brand}</h2>
                    <p>{props.specificItem?.color} {props.specificItem?.title}</p>
                    <h5>Select Size:</h5>
                    <select name="sizes">
                        {options}
                    </select>
                    <h2>{props.specificItem?.price}$</h2>
                    <button className={styles.addToCart} onClick={props.addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemPage