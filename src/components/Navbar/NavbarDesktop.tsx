import LogoIcon from "../../assets/icons/logo.png";
import { NavLink } from "react-router-dom";
import React, { MouseEventHandler, useEffect, useRef } from "react";
import AddedToCartPopup from "./AddedToCartPopup/AddedToCartPopup";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../firebase";
import {
  ShoppingCartIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

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
      <nav className="fixed h-12 top-0 px-4 z-20 bg-stone-900 hidden md:flex w-full items-center">
        <NavLink to="/">
          <img src={LogoIcon} className="w-10 h-10" alt="logo-icon" />
        </NavLink>
        <div className="flex w-full justify-between items-center">
          <ul className="flex gap-2 ml-2 text-lg text-gray-300">
            <li>
              <button>MEN</button>
            </li>
            <li>
              <button>WOMEN</button>
            </li>
          </ul>
          <div className="flex gap-10">
            <button className="" onClick={props.toggleSearchbar}>
              {props.isSearchbarToggled ? (
                <XMarkIcon className="w-6 h-6 text-gray-300" />
              ) : (
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-300" />
              )}
            </button>
            <NavLink to="/login" className="">
              <UserCircleIcon className="w-6 h-6 text-gray-300" />
            </NavLink>
            <NavLink to="/cart" className="h-6 flex gap-2">
              <ShoppingCartIcon className="w-6 h-6 text-gray-300" />
              <p className="text-gray-300">{props.cartSize}</p>
            </NavLink>
          </div>
        </div>
      </nav>

      <AddedToCartPopup cartSize={props.cartSize} />
    </>
  );
};

export default NavbarDesktop;
