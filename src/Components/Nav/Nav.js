import styles from "./navStyles.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    if(props.color === 'white'){
        return(
            <div className={styles.navWrapper}>
                <div className={styles.navElement}><NavLink to='/aboutCompany'>ПРО КОМПАНIЮ</NavLink></div>
                <div className={styles.navElement}><NavLink to='/projects'>НАШI ПРОЕКТИ</NavLink></div>
                <div className={styles.navElement}><NavLink to='/faceOfCompany'>ОБЛИЧЧЯ КОМПАНIЇ</NavLink></div>
                {/* <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
                <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div> */}
                <div className={styles.navElement}><NavLink to='/contacts'>КОНТАКТИ</NavLink></div>
            </div>
        )
    }else{
        return(
            <div className={styles.navWrapperB}>
                <div className={styles.navElement}><NavLink to='/aboutCompany'>ПРО КОМПАНIЮ</NavLink></div>
                <div className={styles.navElement}><NavLink to='/projects'>НАШI ПРОЕКТИ</NavLink></div>
                <div className={styles.navElement}><NavLink to='/faceOfCompany'>ОБЛИЧЧЯ КОМПАНIЇ</NavLink></div>
                {/* <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
                <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div> */}
                <div className={styles.navElement}><NavLink to='/contacts'>КОНТАКТИ</NavLink></div>
            </div>
        )
    }
    
}

export default Nav;
