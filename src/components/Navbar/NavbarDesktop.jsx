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
                        <li><NavLink to='/new-items' className={styles.navElem}>NEW ITEMS</NavLink></li>
                        <li className={styles.men}>
                            <NavLink to='/men' className={styles.navElem}>MEN</NavLink>
                            <span className={styles.menDropDown}>
                                <NavLink to='/men/shoes'>shoes</NavLink>
                                <NavLink to='/men/shirts'>shirts</NavLink>
                                <NavLink to='/men/hoodies'>hoodies</NavLink>
                                <NavLink to='/men/jackets'>jackets</NavLink>
                                <NavLink to='/men/socks'>socks</NavLink>
                                <NavLink to='/men/headgear'>headgear</NavLink>
                                <NavLink to='/men/underwear'>underwear</NavLink>
                            </span>
                        </li>
                        <li className={styles.women}>
                            <NavLink to='/women' className={styles.navElem}>WOMEN</NavLink>
                            <span className={styles.menDropDown}>
                                <NavLink to='/men/shoes'>shoes</NavLink>
                                <NavLink to='/men/shirts'>shirts</NavLink>
                                <NavLink to='/men/hoodies'>hoodies</NavLink>
                                <NavLink to='/men/jackets'>jackets</NavLink>
                                <NavLink to='/men/socks'>socks</NavLink>
                                <NavLink to='/men/headgear'>headgear</NavLink>
                                <NavLink to='/men/underwear'>underwear</NavLink>
                            </span>
                        </li>
                        <li className={styles.brands}>
                            <NavLink to='/brands' className={styles.navElem}>BRANDS</NavLink>
                            <span className={styles.menDropDown}>
                                <NavLink to='/men/nike'>nike</NavLink>
                                <NavLink to='/men/adidas'>adidas</NavLink>
                                <NavLink to='/men/reebok'>reebok</NavLink>
                                <NavLink to='/men/carhartt'>carhartt</NavLink>
                            </span>
                        </li>
                        <li><NavLink to='/sale' className={styles.navElem}>SALE</NavLink></li>
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