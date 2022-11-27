import styles from "./NavbarMobile.module.scss";
import LogoIcon from "../../assets/icons/logo.png";
import SearchIcon from "../../assets/icons/search.svg";
import CartIcon from "../../assets/icons/shopping-cart.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";
import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../app/hooks";
import { sidebarToggled } from "../../features/sidebar-slice";
import { BeakerIcon } from "@heroicons/react/24/solid";

interface Props {
  toggleSearchbar: MouseEventHandler<HTMLSpanElement>;
  isSearchbarToggled: boolean;
  cartSize: number;
}

const NavbarMobile: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  function toggleSidebar() {
    dispatch(sidebarToggled());
  }

  return (
    <>
      <nav className={styles.navMobile}>
        <button onClick={toggleSidebar}>
          <BeakerIcon className="w-6 h-6" />
        </button>
        <NavLink to="/" className={styles.logoWrapper}>
          <img src={LogoIcon} className={styles.logo} alt="logo-icon" />
        </NavLink>
        <div className={styles.functionalityGroup}>
          <div className={styles.searchWrapper} onClick={props.toggleSearchbar}>
            <img
              src={props.isSearchbarToggled ? CloseIcon : SearchIcon}
              alt="search-icon"
            />
          </div>
          <NavLink to="/cart" className={styles.cartWrapper}>
            <img src={CartIcon} alt="cart-icon" />
            <p>{props.cartSize}</p>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
