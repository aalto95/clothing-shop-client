import s from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav>
            <img src='https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg' className={s.logo}/>
            <ul className={s.navigationList}>
                <li><a href="">MARKET</a></li>
                <li><a href="">FOOD</a></li>
                <li><a href="">ALCOHOL</a></li>
                <li><a href="">SMOKES</a></li>
                <li><a href="">ESSENTIALS</a></li>
                <li><a href="">PARTNER WITH US</a></li>
            </ul>
            <a href="" className={s.loginButton}>LOGIN</a>
        </nav>
    )
}

export default Navbar