import styles from './NavbarDesktop.module.css'
import CartIcon from '../../assets/icons/shopping-cart.svg'
import SearchIcon from '../../assets/icons/search.svg'
import CloseIcon from '../../assets/icons/close.svg'
import UserIcon from '../../assets/icons/auth.svg'
import LogoIcon from '../../assets/icons/logo.png'
import {NavLink} from "react-router-dom";
import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import AddedToCartPopup from "./AddedToCartPopup/AddedToCartPopup";

const NavbarDesktop = (props) => {
    return (
        <>
            <nav className={styles.navDesktop}>
                <NavLink to='/'><img src={LogoIcon} className={styles.logo} alt="logo-icon"/></NavLink>
                <div className={styles.desktopNavbar}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to='/new-items'>NEW ITEMS</NavLink></li>
                        <li><NavLink to='/men'>MEN</NavLink></li>
                        <li><NavLink to='/women'>WOMEN</NavLink></li>
                        <li><NavLink to='/brands'>BRANDS</NavLink></li>
                        <li><NavLink to='/sale'>SALE</NavLink></li>
                    </ul>
                    <div className={styles.interactionGroup}>
                        <span className={styles.searchIcon} onClick={props.toggleSearchbar}>
                            <img src={props.isSearchbarToggled ? CloseIcon : SearchIcon} alt="close-icon"/>
                        </span>
                        <NavLink to='/login' className={styles.logButton}>
                            <img src={UserIcon} alt="user-icon"/>
                        </NavLink>
                        <NavLink to='/cart' className={styles.cartIcon}>
                            <img src={CartIcon} alt="cart-icon"/>
                            <p>{props.cartSize}</p>
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Searchbar
                isSearchbarToggled={props.isSearchbarToggled}
                toggleIsFetching={props.toggleIsFetching}
                onSearchFieldChange={props.onSearchFieldChange}
                searchField={props.searchField}
                setProducts={props.setProducts}
            />
            <AddedToCartPopup cartSize={props.cartSize}/>
        </>

    )
}

export default NavbarDesktop