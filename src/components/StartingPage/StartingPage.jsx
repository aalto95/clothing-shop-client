import styles from './StartingPage.module.css'

const StartingPage = (props) => {
    return (
        <div className={styles.startingImage}>
            <div>
                <p className={styles.mainMessage}>brand new drinks</p>
            </div>
            <a href="#">
                <div>
                    <p className={styles.mainMessage}>SHOP NOW</p>
                </div>
            </a>
        </div>
    )
}

export default StartingPage