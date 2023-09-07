import styles from './navStyles.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return(
        <div className={styles.navWrapper}>
            <div className={styles.navElement}><NavLink to='/aboutCompany'>Про компанію</NavLink></div>
            <div className={styles.navElement}><NavLink to='/faceOfCompany'>Обличчя компанії</NavLink></div>
            <div className={styles.navElement}><NavLink to='/realizedProjects'>Реалізовані проекти</NavLink></div>
            <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
            <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div>
            <div className={styles.navElement}><NavLink to='/contacts'>Контакти</NavLink></div>
        </div>
    )
}

export default Nav