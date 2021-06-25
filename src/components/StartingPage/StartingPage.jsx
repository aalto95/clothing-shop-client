import styles from './StartingPage.module.css'
import {NavLink} from "react-router-dom";
import {productsAPI} from "../../api/api";

const StartingPage = (props) => {

    let searchByField = (field, input) => {
        productsAPI.searchByField(field, input)
            .then(response => {
                props.setProducts(response)
            })
    }

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
                <NavLink to='/search/' className={styles.men} onClick={() => {searchByField('sex', 'm')}}>
                    <p className={styles.menText}>MEN</p>
                </NavLink>
                <NavLink to='/search/' className={styles.women} onClick={() => {searchByField('sex', 'f')}}>
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

export default StartingPage