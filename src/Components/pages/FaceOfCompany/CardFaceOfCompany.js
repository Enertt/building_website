import styles from "./cardFaceOfConpany.module.css";
import person from "../../../assets/image1561.png";
import { NavLink } from "react-router-dom";

const CardFaceOfConpany = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.empty}></div>

        <div className={styles.title}>
          <h2>Обличчя компанії</h2>
        </div>

        <div className={styles.empty}></div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.img}>
            <div className={styles.imgDecoration}></div>
          </div>
          <div className={styles.personDescription}>
            <h3>Власов Вiктор Васильович</h3>
            <div className={styles.description}>
              <p>
                Народився 26 березня 1963 року у м. Екабпілсі (Латвія), у родині
                військового службовця.
              </p>
              <p>
                З вересня 1980 р. по червень 1989 р. - курсант Ризького
                військового авіаційного училища ім. Якова Алксніса, по
                закінченні якого отримав диплом інженера-електрика.
              </p>
            </div>
            <NavLink to="/faceOfCompany">
              <button className={styles.further_btn}>Детальніше</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFaceOfConpany;
