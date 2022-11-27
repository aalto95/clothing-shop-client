import styles from "./NavbarDesktop.module.scss";
import CartIcon from "../../assets/icons/shopping-cart.svg";
import SearchIcon from "../../assets/icons/search.svg";
import CloseIcon from "../../assets/icons/close.svg";
import UserIcon from "../../assets/icons/auth.svg";
import LogoIcon from "../../assets/icons/logo.png";
import { NavLink } from "react-router-dom";
import React, { MouseEventHandler, useEffect } from "react";
import AddedToCartPopup from "./AddedToCartPopup/AddedToCartPopup";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../firebase";

interface Props {
  toggleSearchbar: MouseEventHandler<HTMLSpanElement>;
  isSearchbarToggled: boolean;
  cartSize: number;
}

const NavbarDesktop: React.FC<Props> = (props) => {
  const firestore = getFirestore(firebaseApp);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [brands, setBrands] = React.useState<any[]>([]);

  async function getCategories() {
    const categoriesRef = collection(firestore, "categories");
    const snapshot = await getDocs(categoriesRef);
    const categories = snapshot.docs.map((doc) => doc.data());
    setCategories(categories);
  }

  async function getBrands() {
    const brandsRef = collection(firestore, "brands");
    const snapshot = await getDocs(brandsRef);
    const brands = snapshot.docs.map((doc) => doc.data());
    setBrands(brands);
  }

  useEffect(() => {
    getCategories();
    getBrands();
  }, []);

  return (
    <>
      <nav className={styles.navDesktop}>
        <NavLink to="/">
          <img src={LogoIcon} className={styles.logo} alt="logo-icon" />
        </NavLink>
        <div className={styles.desktopNavbar}>
          <ul className={styles.navigationList}>
            <li>
              <NavLink to="/" className={styles.navElem}>
                NEW ITEMS
              </NavLink>
            </li>
            <li className={styles.brands}>
              <p className={styles.navElem}>MEN</p>
              <span className={styles.menDropDown}>
                {categories &&
                  categories.map((category) => {
                    return (
                      <NavLink
                        key={category.uid}
                        to={`/search/1/${category.name}`}
                        className={styles.menDropDownElem}
                      >
                        {category.name}
                      </NavLink>
                    );
                  })}
              </span>
            </li>
            <li className={styles.brands}>
              <p className={styles.navElem}>WOMEN</p>
              <span className={styles.menDropDown}>
                {categories &&
                  categories.map((category) => {
                    return (
                      <NavLink
                        key={category.uid}
                        to={`/search/2/${category.name}`}
                        className={styles.menDropDownElem}
                      >
                        {category.name}
                      </NavLink>
                    );
                  })}
              </span>
            </li>
            <li className={styles.brands}>
              <p className={styles.navElem}>BRANDS</p>
              <span className={styles.menDropDown}>
                {brands &&
                  brands.map((brand) => {
                    return (
                      <NavLink
                        key={brand.uid}
                        to={`/search/2/${brand.name}`}
                        className={styles.menDropDownElem}
                      >
                        {brand.name}
                      </NavLink>
                    );
                  })}
              </span>
            </li>
            <li>
              <NavLink to="/" className={styles.navElem}>
                SALE
              </NavLink>
            </li>
          </ul>
          <div className={styles.interactionGroup}>
            <span className={styles.searchIcon} onClick={props.toggleSearchbar}>
              <img
                src={props.isSearchbarToggled ? CloseIcon : SearchIcon}
                alt="close-icon"
              />
            </span>
            <NavLink to="/login" className={styles.logButton}>
              <img src={UserIcon} alt="user-icon" />
            </NavLink>
            <NavLink to="/cart" className={styles.cartIcon}>
              <img src={CartIcon} alt="cart-icon" />
              <p>{props.cartSize}</p>
            </NavLink>
          </div>
        </div>
      </nav>
      <AddedToCartPopup cartSize={props.cartSize} />
    </>
  );
};

export default NavbarDesktop;
