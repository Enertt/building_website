import styles from './contacts.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'

const Contacts = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>
                <header className={styles.header}>

                    
                        <NavLink to='/'>
                        <div className={styles.logo}>
                            <span>ВЛАСТ</span>
                            <span>БУД</span>
                            </div>
                        </NavLink>
                       
                    
                    
                    <div className={styles.navigation}>
                        <Nav />
                    </div>
                </header>

                <div className={styles.textWrapper}>
                    <p>
                        Будівельна компанія ТОВ «ВЛАСТ БУД» входить до групи будівельних
                        компаній ВЛАСТ ГРУПА, яка охоплює весь спектр робіт у реалізації
                        проектів від створення концепції, розробки проекту до здачі об&#39;єкта в
                        експлуатацію, а також продажу площ.
                        У групі будівельних компаній ТОВ «ВЛАСТ БУД» успішно виконує функції
                        Керуючої компанії та Генерального підрядника.
                        Компанія успішно виконує роботи у сфері будівництва (багатоповерхові
                        житлові та громадські будівлі, котеджі) та ремонту (капітальний або
                        косметичний ремонт, демонтаж конструкцій, оздоблення квартир, кафе,
                        офісів).
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contacts