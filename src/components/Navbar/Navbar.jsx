import s from './Navbar.module.css'
import CartIcon from './../../assets/images/shopping-cart.svg'
import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";

const Navbar = (props) => {

    useEffect(() => console.log('mounted'), [props.cart])

    return (
        <nav>
            <NavLink to='/'><img src='https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg' className={s.logo}/></NavLink>
            <ul className={s.navigationList}>
                <li><NavLink to='/'>MARKET</NavLink></li>
                <li><NavLink to='/'>FOOD</NavLink></li>
                <li><NavLink to='/'>ESSENTIALS</NavLink></li>
                <li><NavLink to='/'>PARTNER WITH US</NavLink></li>
            </ul>
            <a href="" className={s.loginButton}>LOGIN</a>
            <NavLink to='/cart' className={s.cartIcon}>
                <img
                    src={CartIcon}
                    alt="cart-icon"
                />
                <p>{props.cart.length}</p>
            </NavLink>
        </nav>
    )
}

export default Navbar