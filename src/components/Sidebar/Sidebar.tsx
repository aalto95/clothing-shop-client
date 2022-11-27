import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { sidebarToggled } from "../../features/sidebar-slice";
import styles from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSidebarToggled = useAppSelector(
    (state) => state.sidebar.isSidebarToggled
  );
  function handleSidebarClose() {
    dispatch(sidebarToggled());
  }

  return (
    <div
      className={styles.sidebar}
      style={{
        transform: isSidebarToggled ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <div className="h-12 bg-stone-800 flex justify-between items-center px-4">
        <h3>Online store</h3>
        <button className="w-8 h-8" onClick={handleSidebarClose}>
          <XMarkIcon className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
