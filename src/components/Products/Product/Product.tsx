import styles from './Product.module.css'
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import ItemModal from "../../new/ItemModal";

type PropsType = {
    id: number
    price: number
    brand: string
    title: string
    color: string
    style: any
}

const Product : React.FC<PropsType> = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    return (
        <div className={styles.productWrap}>
            <ItemModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
            {/*<NavLink to={'/items/' + props.id}>*/}
                <div
                    className={styles.productImage}
                    style={props.style}
                >
                </div>
            {/*</NavLink>*/}
            <button onClick={() => setIsOpen(true)}>
                Open
            </button>
            <p>{props.color} {props.brand} {props.title} <b>{props.price}$</b></p>
        </div>
    )
}

export default Product
