import image from "../../../assets/image1571.png";
import styles from "./cardAboutCompany.module.css";
import { NavLink } from "react-router-dom";

const CardAboutCompany = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>Про компанiю</h2>
        </div>

        <div className={styles.textItem}>
          <p>
            <span className={styles.uppercase_text}>Тов «Власт Буд» </span>
            входить до групи будівельних компаній ВЛАСТ ГРУПА, яка охоплює весь
            спектр робіт у реалізації проектів від створення концепції, розробки
            проекту до здачі об'єкта в експлуатацію, а також продажу площ.
          </p>
        </div>

        <div className={styles.textItem}>
          <p>У групі будівельних компаній</p>
          <p>
            <span className={styles.uppercase_text}>Тов «Власт Буд» </span>
            успішно виконує функції Керуючої компанії та Генерального
            підрядника.
          </p>
        </div>

        <div className={styles.further}>
          <NavLink to="/aboutCompany">
            <button className={styles.further_btn}>Детальніше</button>
          </NavLink>
        </div>
      </div>

      <div className={styles.photo}></div>
    </div>
  );
};

export default CardAboutCompany;
