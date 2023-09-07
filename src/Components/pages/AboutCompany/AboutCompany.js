import styles from './aboutCompany.module.css'
import { NavLink } from 'react-router-dom'

const AboutCompany = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            About Company Page
        </div>
    )
}
export default AboutCompany