import image from '../../../assets/image1571.png'
import styles from './cardAboutCompany.module.css'
import { NavLink } from 'react-router-dom'

const CardAboutCompany = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.title}>
                    <span>Про</span>
                    <span>компанiю</span>
                </div>

                <div className={styles.textItem}>
                    <p>ТОВ «ВЛАСТ БУД»</p> входить до групи будівельних
                    компаній ВЛАСТ ГРУПА, яка охоплює весь спектр робіт у реалізації
                    проектів від створення концепції, розробки проекту до здачі об'єкта в
                    експлуатацію, а також продажу площ.
                </div>

                <div className={styles.textItem}>
                    У групі будівельних компаній <p>ТОВ «ВЛАСТ БУД»</p> успішно виконує функції
                    Керуючої компанії та Генерального підрядника.
                </div>

                <div className={styles.further}>
                    <NavLink to='/aboutCompany'><span>ДЕТАЛЬНIШЕ</span></NavLink>
                </div>

            </div>

            <div className={styles.photo}></div>
        </div>
    )
}

export default CardAboutCompany