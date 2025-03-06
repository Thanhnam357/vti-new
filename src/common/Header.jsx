import logo from '../assets/images/Logo-white.png'
import { Link } from 'react-router-dom'; 
import classes from '../styles/header.module.scss'

const Header = () => {

    return <div className={classes.header}>
        <div className={classes.header__logo}>
            <a href="#">
                <img src={logo} alt="" />
            </a>
        </div>
        <div className={classes.header__register}>
                <Link to="/signup" className={classes.registerButton}>Đăng ký</Link>
            </div>

    </div>
}

export default Header