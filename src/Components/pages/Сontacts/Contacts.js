import styles from './contacts.module.css'
import { NavLink } from 'react-router-dom'

const Contacts = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            Contacts Page
        </div>
    )
}
export default Contacts