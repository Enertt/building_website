import styles from './navStyles.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div className={styles.navWrapper}>
            <div className={styles.navElement}><NavLink to='/aboutCompany'>ПРО КОМПАНIЮ</NavLink></div>
            <div className={styles.navElement}><NavLink to='/faceOfCompany'>НАШI МОЖЛИВОСТI</NavLink></div>
            <div className={styles.navElement}><NavLink to='/realizedProjects'>ОБЛИЧЧЯ КОМПАНIЇ</NavLink></div>
            {/* <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
            <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div> */}
            <div className={styles.navElement}><NavLink to='/contacts'>КОНТАКТИ</NavLink></div>
        </div>
    )
}

export default Nav