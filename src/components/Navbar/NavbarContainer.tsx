import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchbarToggled } from "../../features/app-slice";
import React from "react";

const NavbarContainer: React.FC = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const isSearchbarToggled = useAppSelector(
    (state) => state.app.isSearchbarToggled
  );
  const dispatch = useAppDispatch();
  const toggleSearchbar = () => {
    dispatch(searchbarToggled());
  };
  return (
    <>
      <NavbarDesktop
        cartSize={cart.length}
        isSearchbarToggled={isSearchbarToggled}
        toggleSearchbar={toggleSearchbar}
      />
      <NavbarMobile
        cartSize={cart.length}
        isSearchbarToggled={isSearchbarToggled}
        toggleSearchbar={toggleSearchbar}
      />
    </>
  );
};

export default NavbarContainer;
