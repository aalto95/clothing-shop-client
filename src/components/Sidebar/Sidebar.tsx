import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { sidebarToggled } from "../../features/sidebar-slice";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const isSidebarToggled = useAppSelector(
    (state) => state.sidebar.isSidebarToggled
  );
  function handleSidebarClose() {
    dispatch(sidebarToggled());
  }
  function goToProfile() {
    history.push("/profile");
    handleSidebarClose();
  }
  return (
    <div
      style={{
        transform: isSidebarToggled ? "translateX(0)" : "translateX(-100%)",
      }}
      className="fixed w-screen h-screen bg-gray-100 transition transform z-20"
    >
      <div className="h-12 bg-stone-800 flex justify-between items-center px-4">
        <h3 className="text-white">Online store</h3>
        <button className="w-8 h-8" onClick={handleSidebarClose}>
          <XMarkIcon className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="m-2">
        <button className="flex" onClick={goToProfile}>
          Profile
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
