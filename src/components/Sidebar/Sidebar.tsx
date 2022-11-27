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
      <div className={styles.sidebarHeader}>
        <h3>Online store</h3>
        <button className="sidebar__header__close" onClick={handleSidebarClose}>
          x
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
