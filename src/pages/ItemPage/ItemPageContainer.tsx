import React, { useEffect } from "react";
import ItemPage from "./ItemPage";
import { withRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  addedOne,
  addedToCart,
  fetchSpecificItem,
} from "../../features/app-slice";
import Preloader from "../../components/Preloader/Preloader";

const ItemPageContainer = (props: any) => {
  let itemId = props.match.params.itemId;
  const cart = useAppSelector((state) => state.app.cart);
  const isFetching = useAppSelector((state) => state.app.isFetching);
  const specificItem = useAppSelector((state) => state.app.specificItem);
  const dispatch = useAppDispatch();
  const addOne = (id: number) => {
    dispatch(addedOne(id));
  };
  const addToCart = (id: number) => {
    dispatch(addedToCart(id));
  };
  const handleAddToCart = (id: number) => {
    let alreadyInCart = false;
    let index = 0;

    for (let j = 0; j < cart.length; j++) {
      if (specificItem?.title === cart[j].title) {
        alreadyInCart = true;
        index = j;
      }
    }
    if (alreadyInCart) {
      addOne(index);
    } else {
      addToCart(id);
    }
  };
  useEffect(() => {
    const promise = dispatch(fetchSpecificItem(itemId));
    return () => {
      promise.abort();
    };
  }, [dispatch, itemId]);
  return (
    <>
      {!isFetching ? (
        <ItemPage
          isFetching={isFetching}
          specificItem={specificItem}
          addToCart={() => handleAddToCart(specificItem!.id)}
        />
      ) : (
        <Preloader />
      )}
    </>
  );
};

let withUrlDataContainerComponent = withRouter(ItemPageContainer);

export default withUrlDataContainerComponent;
