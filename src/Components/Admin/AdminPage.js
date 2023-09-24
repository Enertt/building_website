import styles from './adminPage.module.css'
// import dataJson from '../pages/News/news.json'
import AddNewForm from './AddNewForm'
import deleteUserById from './JsScripts/deleteNews'
import { API } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import copy from '../../jsonCopy.json'

const AdminPage = (props) => {

    useEffect(() => {
        console.log('props.newsData changed:', props.newsData);
    }, [props.newsData]);

    useEffect(() => {
        debugger
        props.getNewsThunkCreator()
    }, [])

    const [addNewFormState, setAddNewFormState] = useState(false)

    const [deleteState, setDeleteState] = useState({ state: false, id: 0 })
    const [modState, setModState] = useState({ state: false, element: null })
    const navigate = useNavigate()

    const [modIdState, setModIdState,] = useState(null)
    const [modTitleState, setModTitleState,] = useState(null)
    const [modDateState, setModDateState,] = useState(null)
    const [modSmallPhotoState, setModSmallPhotoState,] = useState(null)
    const [modBodyState, setModBodyState,] = useState(null)



    useEffect(() => {
        if (!props.isAuth) {
            navigate('/admin');
        }
    }, [props.isAuth, navigate]);

    let newsListState;

    if (props.newsData) {
        newsListState = props.newsData.map((element) => {
            return (
                <div className={styles.newsElement} key={element.id}>
                    <span>{`id: ${element.id} | ${element.title} | ${element.date}`}</span>
                    <button onClick={() => { setDeleteState({ state: true, id: element.id }) }}>DEL</button>
                    <button onClick={() => { setModState({ state: true, element: element }) }}>MOD</button>
                </div>
            );
        });
    } else {
        newsListState = <div>Loading...</div>;
    }

    const ids = props.newsData ? (props.newsData.map(item => item.id)) : (null); // Создаем массив из значений id
    let maxId

    if (ids && ids.length > 0) {
        maxId = Math.max(...ids); // Находим максимальное значение в массиве
    } else {
        maxId = 1
    }

    if (props.isAuth) {
        return (
            <div className={styles.wrapper}>
                <button className={styles.adminKastyl} onClick={() => {
                    props.setNewsThunkCreator(props.token, copy)
                    props.getNewsThunkCreator()
                }}>reload data</button>
                <div className={styles.newsListContent}>
                    <span className={styles.newsListTitle}>Всi новини</span>
                    <div className={styles.newsList}>
                        <div className={styles.newsListBlock}>
                            {newsListState}
                        </div>

                    </div>
                    <button onClick={() => { setAddNewFormState(true) }} className={styles.addNewButton}>Додати новину</button>
                </div>




                <div className={addNewFormState ? styles.addNewWrapper : styles.addNewWrapperNone}>
                    <div className={styles.addNewContent}>

                        <AddNewForm
                            setNewsThunkCreator={props.setNewsThunkCreator}
                            setAddNewFormState={setAddNewFormState}
                            maxId={maxId} newsData={props.newsData}
                            token={props.token}
                            setDeleteState={setDeleteState} />
                    </div>
                </div>


                <div className={deleteState.state ? styles.deleteWrapper : styles.deleteWrapperNone}>
                    <div className={styles.deletingForm}>
                        <span className={styles.deletingForm_span}>{`Видалити новину з id: ${deleteState.id}`}</span>
                        <div className={styles.deletingForm_buttonWrapper}>
                            <button onClick={() => {

                                props.setNewsThunkCreator(props.token, deleteUserById(deleteState.id, props.newsData))
                                setDeleteState({ state: false, id: 0 })
                                props.getNewsThunkCreator();
                            }} className={styles.deletingForm_button}> Видалити </button>
                            <button onClick={() => {

                                setDeleteState({ state: false, id: 0 })
                            }} className={styles.deletingForm_button}>Повернутись</button>
                        </div>
                    </div>
                </div>


                <div className={modState.state ? styles.modWrapper : styles.modWrapperNone}>
                    <div className={styles.modWindow}>
                        <div className={styles.codeWindow}>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Id: `}</div><input value={modState.element ? modState.element.id : "-"}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Title: `}</div><input value={modState.element ? modState.element.title : "-"}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Date: `}</div><input value={modState.element ? modState.element.date : "-"}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`SmallPhoto: `}</div><input value={modState.element ? modState.element.photoSmall : "-"}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Body: `}</div></div>
                            <div>
                                {modState.element ? (modState.element.body.map((element) => {
                                    if (element.type === 'text') {
                                        debugger
                                        return (
                                            <div className={styles.modElementBody}><span>{`Paragraph: `}</span><input value={element.content}></input></div>
                                        )
                                    } else if (element.type === 'photo') {
                                        return (
                                            <div className={styles.modElementBody}><span>{`Photo: (Style(side): `}</span><input value={element.style}></input><span>{` Src(name): `}</span><input value={element.src}></input><span>{`)`}</span></div>
                                        )
                                    }
                                    return null
                                })
                                ) : (<div></div>)}
                            </div>

                        </div>
                        <div className={styles.buttonBlock}>
                            <button>Зберегти</button>
                            <button onClick={() => { setModState({ state: false, element: null }) }}>Повернутись</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return navigate('/admin')
    }

}

export default AdminPage