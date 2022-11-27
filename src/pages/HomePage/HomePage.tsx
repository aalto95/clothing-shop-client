import styles from "./HomePage.module.scss";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className={styles.startingImage}>
        <div>
          <h1 className={styles.mainMessage}>Summer 21</h1>
        </div>
        <NavLink to="/search">
          <div>
            <p className={styles.mainMessage}>BROWSE</p>
          </div>
        </NavLink>
      </div>

      <div className={styles.genders}>
        <NavLink to="/search/1" className={styles.men}>
          <p className={styles.menText}>MEN</p>
        </NavLink>
        <NavLink to="/search/2" className={styles.women}>
          <p className={styles.womenText}>WOMEN</p>
        </NavLink>
      </div>

      <div className={styles.clothesCategories}>
        <NavLink to="/search/0/shoes" className={styles.footwear}>
          <p>SHOES</p>
        </NavLink>
        <NavLink to="/search/0/pants" className={styles.pants}>
          <p>PANTS</p>
        </NavLink>
        <NavLink to="/search/0/hoodie" className={styles.hoodie}>
          <p>HOODIES</p>
        </NavLink>
        <NavLink to="/search/shirt" className={styles.shirt}>
          <p>SHIRTS</p>
        </NavLink>
        <NavLink to="/search/jacket" className={styles.jacket}>
          <p>JACKETS</p>
        </NavLink>
        <NavLink to="/search/headgear" className={styles.headgear}>
          <p>HEADGEAR</p>
        </NavLink>
      </div>
    </>
  );
};

export default HomePage;
