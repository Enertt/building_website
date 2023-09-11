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
      <div className={`${styles.hero_section} ${styles.container}`}>
                
                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={'white'}/> 

        <span className={`${styles.hero_title} ${styles.uppercase_text}`}>
          Тов «Власт Буд»
        </span>
      </div>

      <div className={styles.keyPoints}>
        <span className={`${styles.uppercase_text} ${styles.keyPoints_span}`}>
          Нерухомість та будівництво
        </span>
        <span className={`${styles.uppercase_text} ${styles.keyPoints_span}`}>
          25 років на ринку
        </span>
        <span className={`${styles.uppercase_text} ${styles.keyPoints_span}`}>
          Великий попит
        </span>
      </div>

      <section className={styles.about_section}>
        <div className={`${styles.container} ${styles.aboutSection_wraper}`}>
          <CardAboutCompany />
        </div>
      </section>

      <section className={styles.ceo_section}>
        <div className={`${styles.container} ${styles.ceoSection_wraper}`}>
          <CardFaceOfConpany />
        </div>
      </section>

      <section className={styles.options_section}>
        <div className={`${styles.container} ${styles.optionsSection_wraper}`}>
          <OurOptions />
        </div>
      </section>

      <section className={styles.projects_section}>
        <div className={`${styles.container} ${styles.projectsSection_wraper}`}>
          <OurProjects />
        </div>
      </section>

      <section className={styles.map_section}>
        <div className={`${styles.container} ${styles.mapSection_wraper}`}>
          <Map />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Main;
