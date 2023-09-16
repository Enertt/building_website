import styles from './adminPage.module.css'
import dataJson from '../pages/News/news.json'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AdminPage = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.isAuth) {
          navigate('/admin');
        }
    }, [props.isAuth, navigate]);

    const newsList = dataJson.map((element) => {
        return(
            <div className={styles.newsElement}>
                <span>{`id: ${element.id} | ${element.title} | ${element.date}`}</span>
                <button>DEL</button>
                <button>MOD</button>
            </div>
            
        )
    })
    
    if(props.isAuth){
        console.log(props.isAuth)
        return(
            <div className={styles.wrapper}>
                <div className={styles.newsListContent}>
                    <span className={styles.newsListTitle}>Всi новини</span>
                        <div className={styles.newsList}>
                            <div className={styles.newsListBlock}>
                                {newsList}
                            </div>
                            
                        </div>
                    <button className={styles.addNewButton}>Додати новину</button>
                </div>
                

                <div className={styles.newsSearcher}>
                    <div className={styles.searcher}>
                        <span  className={styles.searcherTitle}>Пошук новин</span>
                        <div className={styles.searcherBlock}>
                            <div className={styles.searcherBlockButtons}>
                                <button className={styles.buttonSearch}>За Id</button>
                                <button className={styles.buttonSearch}>За Назвою</button>
                                <button className={styles.buttonSearch}>За Датою</button>
                            </div>
                            <input placeholder='Даннi для пошуку'></input>
                            <div className={styles.searchResult}>
                                <span className={styles.searchResultTitle}>Результати пошуку</span>
                                <div className={styles.searchResultBlock}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return navigate('/admin')
    }
    
}

export default AdminPage