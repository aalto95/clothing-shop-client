import styles from './Navbar.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import 'react-dropdown/style.css';
import NavIcon from './../../assets/images/menu.png'

const Navbar = (props) => {

    useEffect(() => console.log('mounted'), [props.cart])

    return (
        <nav>
            <NavLink to='/'><img src='https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg' className={styles.logo}/></NavLink>
            <div className={styles.regularNavbar}>
                <ul className={styles.navigationList}>
                    <li><NavLink to='/'>MARKET</NavLink></li>
                    <li><NavLink to='/food'>FOOD</NavLink></li>
                    <li><NavLink to='/'>ESSENTIALS</NavLink></li>
                    <li><NavLink to='/'>PARTNER WITH US</NavLink></li>
                </ul>
                <NavLink to='/login' className={styles.loginButton}>LOGIN</NavLink>
                <NavLink to='/cart' className={styles.cartIcon}>
                    <img
                        src={CartIcon}
                        alt="cart-icon"
                    />
                </NavLink>
            </div>

            <div class={styles.dropdown}>
                <button class={styles.dropbtn}>
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

export default Navbar