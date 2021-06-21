import styles from './NavbarDesktop.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import NavIcon from './../../assets/images/menu.png'
import GearIcon from './../../assets/images/gear.svg'
import {NavLink} from "react-router-dom";
import React from "react";
import 'react-dropdown/style.css';


const NavbarDesktop = (props) => {

    return (
        <nav className={styles.navDesktop}>
            <NavLink to='/'><img src='https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg' className={styles.logo}/></NavLink>
            <div className={styles.desktopNavbar}>
                <ul className={styles.navigationList}>
                    <li><NavLink to='/'>MARKET</NavLink></li>
                    <li><NavLink to='/food'>FOOD</NavLink></li>
                    <li><NavLink to='/'>ESSENTIALS</NavLink></li>
                    <li><NavLink to='/'>PARTNER WITH US</NavLink></li>
                </ul>
                {
                    props.isLogged
                    ? <div onClick={props.logout} className={styles.logButton}>LOGOUT</div>
                    : <NavLink to='/login' className={styles.logButton}>LOGIN</NavLink>
                }
                <NavLink to='/cart' className={styles.cartIcon}>
                    <img
                        src={CartIcon}
                        alt="cart-icon"
                    />
                    <p>{props.cartSize}</p>
                </NavLink>
                {
                    props.isAdmin &&
                    <NavLink to='/admin'>
                        <img
                            className={styles.gearIcon}
                            src={GearIcon}
                            alt="gear-icon"
                        />
                    </NavLink>
                }
            </div>
        </nav>
    )
}

export default NavbarDesktop