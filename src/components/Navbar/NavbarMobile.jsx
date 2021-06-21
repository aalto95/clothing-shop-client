import styles from './NavbarMobile.module.css'
import NavIcon from './../../assets/images/menu.svg'
import LogoIcon from './../../assets/images/logo.png'
import SearchIcon from './../../assets/images/search.svg'
import CartIcon from './../../assets/images/shopping-cart.svg'
import {NavLink} from "react-router-dom";
import React from "react";

const NavbarMobile = (props) => {
    return (
        <nav className={styles.navMobile}>
            <div class={styles.dropdown}>
                <button class={styles.dropBtn}>
                    <img src={NavIcon} className={styles.navIcon}/>
                </button>
                <div class={styles.dropdownContent}>
                    <NavLink to='/'>MARKET</NavLink>
                    <NavLink to='/food'>FOOD</NavLink>
                    <NavLink to='/'>ESSENTIALS</NavLink>
                    <NavLink to='/'>PARTNER WITH US</NavLink>
                </div>
            </div>
            <NavLink to='/' className={styles.logoWrapper}>
                <img src={LogoIcon} className={styles.logo}/>
            </NavLink>
            <div className={styles.functionalityGroup}>
                <div className={styles.searchWrapper}>
                    <img src={SearchIcon} alt=""/>
                </div>
                <NavLink to='/cart' className={styles.cartWrapper}>
                    <img src={CartIcon} alt=""/>
                </NavLink>
            </div>
        </nav>
    )
}

export default NavbarMobile