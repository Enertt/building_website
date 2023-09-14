import styles from './news.module.css'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import newsJson from './news.json'


const News = () => {

    const news = newsJson.map((element)=>{
        return(
            <div className={styles.newsElement}>
                <div className={styles.img}>
                    <img src={element.photoSmall} />
                </div>
                
                <span>{element.title}</span>
            </div>
        )
    })
    return(
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>

                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={'white'}/>

                <div className={styles.textWrapper}>
                    <span>Новини компанії</span>
                    {news}
                </div>
                <div className={styles.footer}><Footer /></div>
            </div>
            

        </div>
    )
}

export default News