import styles from './ourOptions.module.css'
import Swiper from '../swiper/Swiper'

const OurOptions = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.title}><span>Нашi можливостi</span></div>
            <div className={styles.swiper}>
                <Swiper />
            </div>
            
        </div>
    )
}

export default OurOptions