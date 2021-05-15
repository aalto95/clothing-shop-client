import s from './StartingPage.module.css'

const StartingPage = (props) => {
    return (
        <div className={s.startingImage}>
            <div>
                <p>brand new drinks</p>
            </div>
            <a href="#">
                <div>
                    <p>SHOP NOW</p>
                </div>
            </a>
        </div>
    )
}

export default StartingPage