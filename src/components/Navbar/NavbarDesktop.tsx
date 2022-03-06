import styles from './NavbarDesktop.module.scss'
import CartIcon from '../../assets/icons/shopping-cart.svg'
import SearchIcon from '../../assets/icons/search.svg'
import CloseIcon from '../../assets/icons/close.svg'
import UserIcon from '../../assets/icons/auth.svg'
import LogoIcon from '../../assets/icons/logo.png'
import {NavLink} from "react-router-dom";
import React, { MouseEventHandler } from "react";
import AddedToCartPopup from "./AddedToCartPopup/AddedToCartPopup";

interface Props {
    toggleSearchbar: MouseEventHandler<HTMLSpanElement>;
    isSearchbarToggled: boolean;
    cartSize: number;
}

const NavbarDesktop: React.FC<Props> = (props) => {
    return (
        <>
            <nav className={styles.navDesktop}>
                <NavLink to='/'><img src={LogoIcon} className={styles.logo} alt="logo-icon"/></NavLink>
                <div className={styles.desktopNavbar}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to='/' className={styles.navElem}>NEW ITEMS</NavLink></li>
                        <li className={styles.men}>
                            <NavLink to='/search/men' className={styles.navElem}>MEN</NavLink>
                        </li>
                        <li className={styles.women}>
                            <NavLink to='/search/women' className={styles.navElem}>WOMEN</NavLink>
                        </li>
                        <li className={styles.brands}>
                            <p className={styles.navElem}>BRANDS</p>
                            <span className={styles.menDropDown}>
                                <NavLink to='/search/nike'>nike</NavLink>
                                <NavLink to='/search/grind london'>grind london</NavLink>
                                <NavLink to='/search/polar'>polar</NavLink>
                                <NavLink to='/search/carhartt'>carhartt</NavLink>
                            </span>
                        </li>
                        <li><NavLink to='/' className={styles.navElem}>SALE</NavLink></li>
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
            <AddedToCartPopup cartSize={props.cartSize}/>
        </>

    )
}

export default NavbarDesktop
