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
                    <h1 className={styles.mainMessage}>Stussy Summer 21</h1>
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
                <NavLink to='/search/' className={styles.footwear} onClick={() => {searchByField('type', 'footwear')}}>
                    <p>FOOTWEAR</p>
                </NavLink>
                <NavLink to='/search/' className={styles.pants} onClick={() => {searchByField('type', 'pants')}}>
                    <p>PANTS</p>
                </NavLink>
                <NavLink to='/search/' className={styles.hoodie} onClick={() => {searchByField('type', 'hoodie')}}>
                    <p>HOODIES</p>
                </NavLink>
                <NavLink to='/search/' className={styles.shirt} onClick={() => {searchByField('type', 'shirt')}}>
                    <p>SHIRTS</p>
                </NavLink>
                <NavLink to='/search/' className={styles.jacket} onClick={() => {searchByField('type', 'jacket')}}>
                    <p>JACKETS</p>
                </NavLink>
                <NavLink to='/search/' className={styles.headgear} onClick={() => {searchByField('type', 'headgear')}}>
                    <p>HEADGEAR</p>
                </NavLink>
            </div>
        </>
    )
}

export default StartingPage