import React, { useEffect, useState } from "react";

interface Props {
  cartSize: number;
}

const AddedToCartPopup: React.FC<Props> = (props) => {
  const [cart, setCart] = useState(0);
  let useStateCondition = cart !== props.cartSize && props.cartSize !== 0;
  let popupCondition = cart === props.cartSize && props.cartSize !== 0;
  useEffect(() => {
    if (useStateCondition) {
      setCart(props.cartSize);
    }
  }, [props.cartSize, useStateCondition]);
  return (
    <div>
      <div className={popupCondition ? "block" : "hidden"}>
        <p>added to cart</p>
      </div>
    </div>
  );
};

export default AddedToCartPopup;
