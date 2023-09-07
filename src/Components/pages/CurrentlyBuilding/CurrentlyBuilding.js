import styles from './currentlyBuilding.module.css'
import { NavLink } from 'react-router-dom'

const CurrentlyBuilding = () => {
    return(
        <div className={styles.wrapper}>
            <NavLink to='/'>BACK</NavLink>
            Currently Building Page
        </div>
    )
}
export default CurrentlyBuilding