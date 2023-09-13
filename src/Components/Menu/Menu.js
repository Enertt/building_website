import styles from './menu.module.css'
import { NavLink } from "react-router-dom";
import { useState } from 'react'

const Menu = (props) => {

    const [menu, menuState] = useState(false)
    return (
        <div>
            <div>
                <svg onClick={() => {menuState(!menu)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>

            <div className={menu ? styles.menuContentActive : styles.menuContent}>
                <div>
                    <nav
                        className={
                            props.color === "white"
                                ? styles.navWrapper
                                : `${styles.navWrapper} ${styles.hero_navlinkColor}`
                        }
                    >
                        <ul className={styles.navList}>
                            <li className={`${styles.navItem} ${styles.uppercase_text}`}>
                                <NavLink to="/aboutCompany">Про компанію</NavLink>
                            </li>
                            <li className={`${styles.navItem} ${styles.uppercase_text}`}>
                                <NavLink to="/projects">Наші проєкти</NavLink>
                            </li>
                            <li className={`${styles.navItem} ${styles.uppercase_text}`}>
                                <NavLink to="/faceOfCompany">Обличчя компанії</NavLink>
                            </li>
                            {/*<li className={styles.navItem}><NavLink to='/currentlyBuilding'>CURRENT PROJECTS</NavLink></li>
                                    <li className={styles.navItem}><NavLink to='/rebuilding'>REBUILDING PROJECTS</NavLink></li>
                                    */}
                            <li className={`${styles.navItem} ${styles.uppercase_text}`}>
                                <NavLink to="/contacts">Контакти</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Menu