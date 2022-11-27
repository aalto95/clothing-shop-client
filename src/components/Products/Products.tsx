import styles from "./Products.module.scss";
import Product from "./Product/Product";
import { Item } from "../../models/types";
import React from "react";

type PropsType = {
  items: any;
  searchText: string;
};

const Products: React.FC<PropsType> = (props) => {
  const productElements = props.items.map((item: any, i: any) => (
    <Product
      key={item.id}
      uid={item.uid}
      price={item.price}
      brand={item.brand}
      title={item.title}
      color={item.color}
      style={{ backgroundImage: `url(${item.image})` }}
    />
  ));

  if (!props.items.length) return <h1>Nothing found</h1>;

  return (
    <>
      <p>
        {props.items.length} results for '{props.searchText}'
      </p>
      <div className={styles.wrapper}>
        <div className={styles.productContainer}>{productElements}</div>
      </div>
    </>
  );
};

export default Products;
