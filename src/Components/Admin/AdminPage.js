import styles from './adminPage.module.css'
import dataJson from '../pages/News/news.json'
import AddNewForm from './AddNewForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const AdminPage = (props) => {
    const [addNewFormState, setAddNewFormState] = useState(false)
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
                    <button onClick={() => {setAddNewFormState(true)}} className={styles.addNewButton}>Додати новину</button>
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




                <div className={addNewFormState ? styles.addNewWrapper : styles.addNewWrapperNone}>
                    <div className={styles.addNewContent}>
                        <svg onClick={() => {setAddNewFormState(false)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                        <AddNewForm/>
                    </div>
                </div>
            </div>
        )
    }else{
        return navigate('/admin')
    }
    
}

export default AdminPage