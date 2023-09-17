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

    const ids = dataJson.map(item => item.id); // Создаем массив из значений id
    let maxId

    if (ids.length > 0) {
        maxId = Math.max(...ids); // Находим максимальное значение в массиве
    } else {
        maxId = 1
    }
    
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
                

                {/* <div className={styles.newsSearcher}>
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
                </div> */}




                <div className={addNewFormState ? styles.addNewWrapper : styles.addNewWrapperNone}>
                    <div className={styles.addNewContent}>
                        
                        <AddNewForm setAddNewFormState={setAddNewFormState} maxId={maxId}/>
                    </div>
                </div>
            </div>
        )
    }else{
        return navigate('/admin')
    }
    
}

export default AdminPage