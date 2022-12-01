import { NavLink } from "react-router-dom";
import React, { MouseEventHandler } from "react";
import { useAppDispatch } from "../../app/hooks";
import { sidebarToggled } from "../../features/sidebar-slice";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import AddedToCartPopup from "./AddedToCartPopup/AddedToCartPopup";

interface Props {
  toggleSearchbar: MouseEventHandler<HTMLSpanElement>;
  isSearchbarToggled: boolean;
  cartSize: number;
}

const NavbarMobile: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  function toggleSidebar() {
    dispatch(sidebarToggled());
  }

  return (
    <>
      <nav className="h-12 w-full top-0 z-10 px-4 flex md:hidden justify-between items-center bg-stone-900 fixed ">
        <button onClick={toggleSidebar} className="w-8 h-8">
          <Bars3Icon className="w-8 h-8 text-gray-300" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-6 h-6" onClick={props.toggleSearchbar}>
            {props.isSearchbarToggled ? (
              <XMarkIcon className="w-6 h-6 text-gray-300" />
            ) : (
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-300" />
            )}
          </button>
          <NavLink to="/cart" className="flex gap-2 items-center">
            <ShoppingCartIcon className="w-6 h-6 text-gray-300" />
            <p className="text-gray-300">{props.cartSize}</p>
          </NavLink>
        </div>
      </nav>

      <AddedToCartPopup cartSize={props.cartSize} />
    </>
  );
};

export default NavbarMobile;
