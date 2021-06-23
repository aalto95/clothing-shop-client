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
import {productsAPI} from "../../api/api";
import SearchbarContainer from "./Searchbar/SearchbarContainer";

const NavbarDesktop = (props) => {
    let searchByField = (field, input) => {
        productsAPI.searchByField(field, input)
            .then(response => {
                props.setProducts(response)
            })
    }
    return (
        <>
            <nav className={styles.navDesktop}>
                <NavLink to='/'><img src={LogoIcon} className={styles.logo} alt="logo-icon"/></NavLink>
                <div className={styles.desktopNavbar}>
                    <ul className={styles.navigationList}>
                        <li><NavLink to='/new-items' className={styles.navElem}>NEW ITEMS</NavLink></li>
                        <li className={styles.men}>
                            <NavLink to='search/' className={styles.navElem} onClick={() => {searchByField('sex', 'm')}}>MEN</NavLink>
                            {/*<span className={styles.menDropDown}>*/}
                            {/*    <NavLink to='search/men/shoes' onClick={() => {searchProducts('shoes')}}>shoes</NavLink>*/}
                            {/*    <NavLink to='search/men/shirts' onClick={() => {searchProducts('shirts')}}>shirts</NavLink>*/}
                            {/*    <NavLink to='search/men/hoodies' onClick={() => {searchProducts('hoodies')}}>hoodies</NavLink>*/}
                            {/*    <NavLink to='search/men/jackets' onClick={() => {searchProducts('jackets')}}>jackets</NavLink>*/}
                            {/*    <NavLink to='search/men/socks' onClick={() => {searchProducts('socks')}}>socks</NavLink>*/}
                            {/*    <NavLink to='search/men/headgear' onClick={() => {searchProducts('headgear')}}>headgear</NavLink>*/}
                            {/*    <NavLink to='search/men/underwear' onClick={() => {searchProducts('underwear')}}>underwear</NavLink>*/}
                            {/*</span>*/}
                        </li>
                        <li className={styles.women}>
                            <NavLink to='search/' className={styles.navElem} onClick={() => {searchByField('sex', 'f')}}>WOMEN</NavLink>
                            {/*<span className={styles.menDropDown}>*/}
                            {/*    <NavLink to='/men/shoes'>shoes</NavLink>*/}
                            {/*    <NavLink to='/men/shirts'>shirts</NavLink>*/}
                            {/*    <NavLink to='/men/hoodies'>hoodies</NavLink>*/}
                            {/*    <NavLink to='/men/jackets'>jackets</NavLink>*/}
                            {/*    <NavLink to='/men/socks'>socks</NavLink>*/}
                            {/*    <NavLink to='/men/headgear'>headgear</NavLink>*/}
                            {/*    <NavLink to='/men/underwear'>underwear</NavLink>*/}
                            {/*</span>*/}
                        </li>
                        <li className={styles.brands}>
                            <NavLink to='/search' className={styles.navElem}>BRANDS</NavLink>
                            <span className={styles.menDropDown}>
                                <NavLink to='/search/' onClick={() => {searchByField('brand', 'nike')}}>nike</NavLink>
                                <NavLink to='/search/' onClick={() => {searchByField('brand', 'adidas')}}>adidas</NavLink>
                                <NavLink to='/search/' onClick={() => {searchByField('brand', 'reebok')}}>reebok</NavLink>
                                <NavLink to='/search/' onClick={() => {searchByField('brand', 'carhartt')}}>carhartt</NavLink>
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
                isSearching={props.isSearching}
                toggleIsSearching={props.toggleIsSearching}
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