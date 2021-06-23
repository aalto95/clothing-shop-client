import styles from './StartingPage.module.css'
import {NavLink} from "react-router-dom";
import {productsAPI} from "../../api/api";

const StartingPage = (props) => {

    let searchProducts = (input) => {
        productsAPI.searchProducts(input)
            .then(response => {
                props.setProducts(response)
            })
    }

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
                <NavLink to='/search/men' className={styles.men}>
                    <p className={styles.menText}>MEN</p>
                </NavLink>
                <NavLink to='/search/women' className={styles.women}>
                    <p className={styles.womenText}>WOMEN</p>
                </NavLink>
            </div>

            <div className={styles.clothesCategories}>
                <NavLink to='/search/footwear' className={styles.footwear} onClick={() => searchProducts('shoes')}>
                    <p>FOOTWEAR</p>
                </NavLink>
                <NavLink to='/search/pants' className={styles.pants} onClick={() => searchProducts('pants')}>
                    <p>PANTS</p>
                </NavLink>
                <NavLink to='/search/hoodies' className={styles.hoodie} onClick={() => searchProducts('hoodie')}>
                    <p>HOODIES</p>
                </NavLink>
                <NavLink to='/search/shirts' className={styles.shirt} onClick={() => searchProducts('shirt')}>
                    <p>SHIRTS</p>
                </NavLink>
                <NavLink to='/search/jackets' className={styles.jacket} onClick={() => searchProducts('jacket')}>
                    <p>JACKETS</p>
                </NavLink>
                <NavLink to='/search/headgear' className={styles.headgear} onClick={() => searchProducts('headgear')}>
                    <p>HEADGEAR</p>
                </NavLink>
            </div>
        </>
    )
}

export default StartingPage