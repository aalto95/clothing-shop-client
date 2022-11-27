import styles from "./Product.module.scss";
import { NavLink } from "react-router-dom";
import React from "react";

type PropsType = {
  uid: string;
  price: number;
  brand: string;
  title: string;
  color: string;
  style: any;
};

const Product: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.productWrap}>
      <NavLink to={"/items/" + props.uid}>
        <div className={styles.productImage} style={props.style}></div>
      </NavLink>
      <p>
        {props.color} {props.brand} {props.title} <b>{props.price}$</b>
      </p>
    </div>
  );
};

export default Product;
