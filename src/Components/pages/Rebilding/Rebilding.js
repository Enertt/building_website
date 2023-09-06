import styles from './rebilding.module.css'
import { NavLink } from 'react-router-dom'

const Rebilding = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            Rebilding Page
        </div>
    )
}
export default Rebilding