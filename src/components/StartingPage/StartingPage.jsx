import styles from './StartingPage.module.css'
import {NavLink} from "react-router-dom";

const StartingPage = (props) => {
    return (
        <>
            <div className={styles.startingImage}>
                <div>
                    <h1 className={styles.mainMessage}>Stussy Summer 21</h1>
                </div>
                <NavLink to='/search'>
                    <div>
                        <p className={styles.mainMessage}>BROWSE</p>
                    </div>
                </NavLink>
            </div>

            <div className={styles.genders}>
                <NavLink to='/men' className={styles.men}>
                    <p className={styles.menText}>MEN</p>
                </NavLink>
                <NavLink to='/women' className={styles.women}>
                    <p className={styles.womenText}>WOMEN</p>
                </NavLink>
            </div>

            <div className={styles.clothesCategories}>
                <NavLink to='/footwear' className={styles.footwear}>
                    <p>FOOTWEAR</p>
                </NavLink>
                <NavLink to='/pants' className={styles.pants}>
                    <p>PANTS</p>
                </NavLink>
                <NavLink to='/hoodies' className={styles.hoodie}>
                    <p>HOODIES</p>
                </NavLink>
                <NavLink to='/shirts' className={styles.shirt}>
                    <p>SHIRTS</p>
                </NavLink>
                <NavLink to='/jackets' className={styles.jacket}>
                    <p>JACKETS</p>
                </NavLink>
                <NavLink to='/headgear' className={styles.headgear}>
                    <p>HEADGEAR</p>
                </NavLink>
            </div>
        </>
    )
}

export default StartingPage