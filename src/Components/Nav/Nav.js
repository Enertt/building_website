import styles from "./navStyles.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.uppercase_text}`}>
          <NavLink to="/aboutCompany">Про компанію</NavLink>
        </li>
        <li className={`${styles.navItem} ${styles.uppercase_text}`}>
          <NavLink to="/realizedProjects">Наші проєкти</NavLink>
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

export default Nav;
