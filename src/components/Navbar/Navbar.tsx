import { NavLink } from "react-router-dom";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { sidebarToggled } from "../../features/sidebar-slice";
import {
  AtSymbolIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { searchbarToggled } from "../../features/app-slice";

const Navbar: React.FC = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const isSearchbarToggled = useAppSelector(
    (state) => state.app.isSearchbarToggled
  );
  const dispatch = useAppDispatch();
  function toggleSidebar() {
    dispatch(sidebarToggled());
  }
  const toggleSearchbar = () => {
    dispatch(searchbarToggled());
  };

  return (
    <nav className="fixed h-12 w-full top-0 z-10 px-4 flex justify-center  bg-stone-900">
      <div className="max-w-350 w-350 flex justify-between items-center">
        <button onClick={toggleSidebar} className="w-8 h-8 block md:hidden">
          <Bars3Icon className="w-8 h-8 text-gray-300" />
        </button>
        <div className="hidden md:flex md:justify-center items-center">
          <NavLink to="/">
            <AtSymbolIcon className="text-white w-8 h-8" />
          </NavLink>
          <ul className="flex gap-2 ml-2 text-lg text-gray-300">
            <li>
              <button>MEN</button>
            </li>
            <li>
              <button>WOMEN</button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6" onClick={toggleSearchbar}>
            {isSearchbarToggled ? (
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            ) : (
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-300" />
            )}
          </button>
          <NavLink to="/login" className="hidden md:block">
            <UserCircleIcon className="w-6 h-6 text-gray-300" />
          </NavLink>
          <NavLink to="/cart" className="flex gap-2 items-center">
            <ShoppingCartIcon className="w-6 h-6 text-gray-300" />
            <p className="text-gray-300">{cart.length}</p>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
