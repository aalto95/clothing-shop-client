import styles from './StartingPage.module.css'
import {NavLink} from "react-router-dom";

const StartingPage = (props) => {
    return (
        <>
            <div className={styles.startingImage}>
                <div>
                    <p className={styles.mainMessage}>brand new drinks</p>
                </div>
                <a href="/">
                    <div>
                        <p className={styles.mainMessage}>SHOP NOW</p>
                    </div>
                </a>
            </div>
            <h1>For Men</h1>
            <div className={styles.images}>
                <NavLink to='/footwear' className={styles.footwear} />
                <NavLink to='/pants' className={styles.pants} />
                <NavLink to='/hoodies' className={styles.hoodie} />
                <NavLink to='/shirts' className={styles.shirt} />
                <NavLink to='/jackets' className={styles.jacket} />
                <NavLink to='/jackets' className={styles.jacket} />
            </div>
            <h1>For Women</h1>
        </>
    )
}

export default StartingPage