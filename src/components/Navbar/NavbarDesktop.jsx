import styles from './NavbarDesktop.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import SearchIcon from './../../assets/images/search.svg'
import UserIcon from './../../assets/images/auth.svg'
import LogoIcon from './../../assets/images/logo.png'
import {NavLink} from "react-router-dom";
import React from "react";
import 'react-dropdown/style.css';


const NavbarDesktop = (props) => {

    return (
        <nav className={styles.navDesktop}>

            <NavLink to='/'><img src={LogoIcon} className={styles.logo}/></NavLink>
            <div className={styles.desktopNavbar}>
                <ul className={styles.navigationList}>
                    <li><NavLink to='/'>MARKET</NavLink></li>
                    <li><NavLink to='/food'>FOOD</NavLink></li>
                    <li><NavLink to='/'>ESSENTIALS</NavLink></li>
                    <li><NavLink to='/'>PARTNER WITH US</NavLink></li>
                </ul>
                <div className={styles.interactionGroup}>
                    <span className={styles.searchIcon}>
                        <img src={SearchIcon} alt=""/>
                    </span>
                    <NavLink to='/login' className={styles.logButton}>
                        <img src={UserIcon} alt=""/>
                    </NavLink>
                    <NavLink to='/cart' className={styles.cartIcon}>
                        <img
                            src={CartIcon}
                            alt="cart-icon"
                        />
                        <p>{props.cartSize}</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default NavbarDesktop