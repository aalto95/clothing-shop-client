import styles from './NavbarMobile.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import NavIcon from './../../assets/images/menu.png'
import GearIcon from './../../assets/images/gear.svg'
import {NavLink} from "react-router-dom";
import React from "react";
import 'react-dropdown/style.css';


const NavbarMobile = (props) => {
    return (
        <nav className={styles.navMobile}>
            <img src='https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg' className={styles.logo}/>
            <div class={styles.dropdown}>
                <button class={styles.dropBtn}>
                    <img src={NavIcon} className={styles.navIcon}/>
                </button>
                <div class={styles.dropdownContent}>
                    <NavLink to='/'>MARKET</NavLink>
                    <NavLink to='/food'>FOOD</NavLink>
                    <NavLink to='/'>ESSENTIALS</NavLink>
                    <NavLink to='/'>PARTNER WITH US</NavLink>
                    <NavLink to='/login'>LOGIN</NavLink>
                    <NavLink to='/cart'>CART</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavbarMobile