import styles from './HomePage.module.css'
import {NavLink} from "react-router-dom";

const HomePage = (props) => {

    return (
        <>
            <div className={styles.startingImage}>
                <div>
                    <h1 className={styles.mainMessage}>Summer 21</h1>
                </div>
                <NavLink to='/search'>
                    <div>
                        <p className={styles.mainMessage}>BROWSE</p>
                    </div>
                </NavLink>
            </div>

            <div className={styles.genders}>
                <NavLink to='/search/men' className={styles.men}>
                    <p className={styles.menText}>MEN</p>
                </NavLink>
                <NavLink to='/search/women' className={styles.women}>
                    <p className={styles.womenText}>WOMEN</p>
                </NavLink>
            </div>

            <div className={styles.clothesCategories}>
                <NavLink to='/search/footwear' className={styles.footwear}>
                    <p>FOOTWEAR</p>
                </NavLink>
                <NavLink to='/search/pants' className={styles.pants}>
                    <p>PANTS</p>
                </NavLink>
                <NavLink to='/search/hoodie' className={styles.hoodie}>
                    <p>HOODIES</p>
                </NavLink>
                <NavLink to='/search/shirt' className={styles.shirt}>
                    <p>SHIRTS</p>
                </NavLink>
                <NavLink to='/search/jacket' className={styles.jacket}>
                    <p>JACKETS</p>
                </NavLink>
                <NavLink to='/search/headgear' className={styles.headgear}>
                    <p>HEADGEAR</p>
                </NavLink>
            </div>
        </>
    )
}

export default HomePage
