import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import logoB from "../../assets/logo/LogoB.png";
import logoW from "../../assets/logo/LogoW.png";

const Header = (props) => {
  return (
    // <div className={styles.headerWrapper}>
    <header className={styles.header}>
      <NavLink to="/">
        <div className={props.color === "white" ? styles.logo : styles.logoB}>
          {/* <span>ВЛАСТ</span>
                    <span>БУД</span> */}
          {/* {()=>{
                        if(props.color === 'white'){
                            return(
                                <img src={logoB} />
                            )
                        }else{
                            return(
                                <img src={logoW} />
                            )
                        }
                    }} */}
        </div>
      </NavLink>

      <div className={styles.navigation}>
        <Nav color={props.color} />
      </div>

      <div className={styles.navigationSmall}>
        <Menu color={props.color} />
      </div>
    </header>
    // </div>
  );
};

export default Header;
