import Nav from "../Nav/Nav"
import styles from './main.module.css'
import CardAboutCompany from "../pages/AboutCompany/CardAboutCompany"
import CardFaceOfConpany from "../pages/FaceOfCompany/CardFaceOfCompany"
import OurOptions from "../OurOptions/OurOptions"
import OurProjects from "../OurProjects/OurProjects"

const Main = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>
                <header className={styles.header}>

                    <div className={styles.logo}>
                        <span>ВЛАСТ</span>
                        <span>БУД</span>
                    </div>
                    
                    <div className={styles.navigation}>
                        <Nav />
                    </div>
                </header>

                <span className={styles.title}>ТОВ «ВЛАСТ БУД»</span>
            </div>
            
            <div className={styles.line}>
                <span>ВЕЛИКИЙ ПОПИТ НА РИНКУ</span>
                <span>ДОСТУПНI ЗА БЮДЖЕТОМ ФОРМАТИ</span>
                <span>ДОСВIДЧЕНА УПРАВЛIНСЬКА КОМАНДА</span>
            </div>

            <div className={styles.secondSection}>
                <CardAboutCompany />
            </div>

            <div className={styles.thirdSection}>
                <CardFaceOfConpany />
            </div>

            <div className={styles.fourthSection}>
                <OurOptions />
            </div>

            <div className={styles.fifthSection}>
                <OurProjects />
            </div>
        </div>
    )
}

export default Main