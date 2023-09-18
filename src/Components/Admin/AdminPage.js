import styles from './adminPage.module.css'
import dataJson from '../pages/News/news.json'
import AddNewForm from './AddNewForm'
import deleteUserById from './JsScripts/deleteUser'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const AdminPage = (props) => {
    const [addNewFormState, setAddNewFormState] = useState(false)

    const [deleteState, setDeleteState] = useState({ state: false, id: 0})
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
                <button onClick={()=>{setDeleteState({state: true, id: element.id})}}>DEL</button>
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




                <div className={addNewFormState ? styles.addNewWrapper : styles.addNewWrapperNone}>
                    <div className={styles.addNewContent}>
                        
                        <AddNewForm setAddNewFormState={setAddNewFormState} maxId={maxId}/>
                    </div>
                </div>


                <div className={deleteState.state ? styles.deleteWrapper : styles.deleteWrapperNone}>
                    <div className={styles.deletingForm}>
                        <span className={styles.deletingForm_span}>{`Видалити новину з id: ${deleteState.id}`}</span>
                        <div className={styles.deletingForm_buttonWrapper}>
                            <button onClick={()=>{
                                deleteUserById(deleteState.id)
                                setDeleteState({state: false, id: 0})
                            }} className={styles.deletingForm_button}> Видалити </button>
                            <button onClick={()=>{
                                
                                setDeleteState({state: false, id: 0})
                                }} className={styles.deletingForm_button}>Повернутись</button>
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