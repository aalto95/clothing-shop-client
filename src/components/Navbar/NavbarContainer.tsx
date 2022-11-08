import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searchbarToggled } from "../../features/app-slice";

const NavbarContainer = () => {
  const cartSize = useAppSelector((state) => state.app.cartSize);
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
        cartSize={cartSize}
        isSearchbarToggled={isSearchbarToggled}
        toggleSearchbar={toggleSearchbar}
      />
      <NavbarMobile
        cartSize={cartSize}
        isSearchbarToggled={isSearchbarToggled}
        toggleSearchbar={toggleSearchbar}
      />
    </>
  );
};

export default NavbarContainer;
