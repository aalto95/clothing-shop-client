import styles from "./Products.module.scss";
import Product from "./Product/Product";
import React from "react";
import { Thing } from "../../models/thing.model";

type PropsType = {
  items: any;
  searchText: string;
};

const Products: React.FC<PropsType> = (props) => {
  if (!props.items.length) return <h1>Nothing found</h1>;

  return (
    <>
      <p>
        {props.items.length} results for '{props.searchText}'
      </p>
      <div className={styles.wrapper}>
        <div className={styles.productContainer}>
          {props.items.map((item: Thing, i: any) => (
            <Product
              key={item.uid}
              uid={item.uid}
              price={item.price}
              brand={item.brand}
              title={item.name}
              color={item.color!}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
