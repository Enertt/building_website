import Nav from "../Nav/Nav"
import styles from './main.module.css'

const Main = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.navigation}>
                <Nav />
            </div>
            
        </div>
    )
}

export default Main