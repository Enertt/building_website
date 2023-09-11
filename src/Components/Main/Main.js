import Nav from "../Nav/Nav"
import styles from './main.module.css'
import CardAboutCompany from "../pages/AboutCompany/CardAboutCompany"
import CardFaceOfConpany from "../pages/FaceOfCompany/CardFaceOfCompany"
import OurOptions from "../OurOptions/OurOptions"
import OurProjects from "../OurProjects/OurProjects"
import Map from "../Map/Map"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Main = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>
                
                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={'white'}/> 

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

            <div className={styles.sixthSection}>
                <Map />
            </div>

            <Footer />
        </div>
    )
}

export default Main