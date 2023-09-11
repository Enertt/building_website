import Nav from "../Nav/Nav";
import styles from './header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        // <div className={styles.headerWrapper}>
        <header className={styles.header}>
            <NavLink to='/'>
                <div className={props.color === 'white' ? styles.logo : styles.logoB}>
                    <span>ВЛАСТ</span>
                    <span>БУД</span>
                </div>
            </NavLink>


            <div className={styles.navigation}>
                <Nav color={props.color} />
            </div>
        </header>
        // </div>

    )
}

export default Header