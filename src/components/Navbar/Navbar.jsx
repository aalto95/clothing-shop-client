import styles from './Navbar.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import NavIcon from './../../assets/images/menu.png'
import GearIcon from './../../assets/images/gear.svg'
import {NavLink} from "react-router-dom";
import React from "react";
import 'react-dropdown/style.css';


const Navbar = (props) => {

    return (
        <nav>
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
                <NavLink to='/cart' >
                    <img
                        className={styles.cartIcon}
                        src={CartIcon}
                        alt="cart-icon"
                    />
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