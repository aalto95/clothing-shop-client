import CartPage from "./CartPage";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { checkedOut } from "../../features/app-slice";

const CartPageContainer = () => {
  const items = useAppSelector((state) => state.app.items);
  const cart = useAppSelector((state) => state.app.cart);
  const dispatch = useAppDispatch();

  const checkout = () => {
    dispatch(checkedOut());
  };

  return <CartPage items={items} checkout={checkout} />;
};

export default CartPageContainer;
