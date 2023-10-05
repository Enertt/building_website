import styles from "./navStyles.module.css";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    // <div className={styles.navWrapper}>
    //     <div className={styles.navElement}><NavLink to='/aboutCompany'>ПРО КОМПАНIЮ</NavLink></div>
    //     <div className={styles.navElement}><NavLink to='/projects'>НАШI ПРОЕКТИ</NavLink></div>
    //     <div className={styles.navElement}><NavLink to='/faceOfCompany'>ОБЛИЧЧЯ КОМПАНIЇ</NavLink></div>
    //     {/* <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
    //     <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div> */}
    //     <div className={styles.navElement}><NavLink to='/contacts'>КОНТАКТИ</NavLink></div>
    // </div>
    <nav
      className={
        props.color === "white"
          ? styles.navWrapper
          : `${styles.navWrapper} ${styles.hero_navlinkColor}`
      }
    >
      <ul className={styles.navList}>

        <li className={`${styles.navItem} ${styles.uppercase_text}`}>
          <NavLink to="/news">Новини</NavLink>
        </li>
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
  );
};

//   <div className={styles.navWrapperB}>
//     <div className={styles.navElement}>
//       <NavLink to="/aboutCompany">ПРО КОМПАНIЮ</NavLink>
//     </div>
//     <div className={styles.navElement}>
//       <NavLink to="/projects">НАШI ПРОЕКТИ</NavLink>
//     </div>
//     <div className={styles.navElement}>
//       <NavLink to="/faceOfCompany">ОБЛИЧЧЯ КОМПАНIЇ</NavLink>
//     </div>
//     {/* <div className={styles.navElement}><NavLink to='/currentlyBilding'>Об‘єкти які ми зараз будуємо</NavLink></div>
//             <div className={styles.navElement}><NavLink to='/rebilding'>Об‘єкти які відбудовуємо</NavLink></div> */}
//     <div className={styles.navElement}>
//       <NavLink to="/contacts">КОНТАКТИ</NavLink>
//     </div>
//   </div>

export default Nav;
