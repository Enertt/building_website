import styles from './cardFaceOfConpany.module.css'
import person from '../../../assets/image1561.png'
import { NavLink } from 'react-router-dom'

const CardFaceOfConpany = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.empty}></div>

                <div className={styles.title}>
                    <span>Обличчя</span>
                    <span>компанії</span>
                </div>

                <div className={styles.empty}></div>
            </div>

            <div className={styles.contentWrapper}>
                <div className={styles.content}>
                    <div className={styles.img}>
                        <div className={styles.imgDecoration}></div>
                    </div>
                    <div className={styles.personDescription}>
                        <div className={styles.name}>Власов Вiктор Васильович</div>
                        <div className={styles.description}>
                            Народився 26 березня 1963 року у м. Екабпілсі (Латвія), у родині військового
                            службовця.<br/>
                            З вересня 1980 р. по червень 1989 р. - курсант Ризького військового
                            авіаційного училища ім. Якова Алксніса, по закінченні якого отримав диплом
                            інженера-електрика.
                            3 1985 р. по 1989 р. служив у Далекосхідному окрузі в авіаційному полку на
                            посаді інженера полку. З січня 1990 року по серпень 1992 року працював на
                            заводі "Росток" на посаді інженера-електронника.

                            
                        </div>
                        <NavLink to='/faceOfCompany'><span>ДЕТАЛЬНIШЕ</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFaceOfConpany