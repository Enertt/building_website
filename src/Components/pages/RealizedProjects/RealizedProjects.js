import styles from './realizedProjects.module.css'
import { NavLink } from 'react-router-dom'

const RealizedProjects = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            Realized Projects Page
        </div>
    )
}
export default RealizedProjects