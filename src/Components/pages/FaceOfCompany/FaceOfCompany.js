import styles from './faceOfCompany.module.css'
import { NavLink } from 'react-router-dom'

const FaceOfCompany = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            Face Of Company Page
        </div>
    )
}
export default FaceOfCompany