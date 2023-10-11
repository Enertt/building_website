import styles from './adminPage.module.css'
// import dataJson from '../pages/News/news.json'
import AddNewForm from './AddNewForm'
import deleteNewsById from './JsScripts/deleteNews'
import deleteMessageById from './JsScripts/deleteMessage'
import modNewsById from './JsScripts/modNews'
import { API } from '../../api/api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import copy from '../../jsonCopy.json'

const AdminPage = (props) => {

    // const [messageState, setMessageState] = useState()

    // useEffect(() => {
    //     if(props.token){
    //         API.getMessage(props.token).then(res => {
    //             setMessageState(res)
    //         })
    //     }
    // }, [messageState])

    useEffect(() => {
        props.getNewsThunkCreator()
    }, [])

    useEffect(() => {
        if(props.token){
            props.getMessagesThunkCreator(props.token)
        }
    }, [props.token])




    const [addNewFormState, setAddNewFormState] = useState(false)

    const [deleteState, setDeleteState] = useState({ state: false, id: 0 })
    const [deleteMessageState, setDeleteMessageState] = useState({ state: false, id: 0 })
    const [modState, setModState] = useState({ state: false, element: null })

    const [showState, setShowState] = useState({ state: false, element: null })

    const navigate = useNavigate()

    const [modIdState, setModIdState,] = useState(null)
    const [modTitleState, setModTitleState,] = useState(null)
    const [modDateState, setModDateState,] = useState(null)
    const [modSmallPhotoState, setModSmallPhotoState,] = useState(null)
    const [modBodyState, setModBodyState,] = useState(null)



    const modBodyElement_content = (index, value) => {
        let newArray = []
        modBodyState.map((e) => {
            if (modBodyState.indexOf(e) === index) {
                e.content = value
                newArray.push(e)
            } else {
                newArray.push(e)
            }
        })
        setModBodyState(newArray)
    }
    const modBodyElement_style = (index, value) => {
        let newArray = []
        modBodyState.map((e) => {
            if (modBodyState.indexOf(e) === index) {
                e.style = value
                newArray.push(e)
            } else {
                newArray.push(e)
            }
        })
        setModBodyState(newArray)
    }
    const modBodyElement_src = (index, value) => {
        let newArray = []
        modBodyState.map((e) => {
            if (modBodyState.indexOf(e) === index) {
                e.src = value
                newArray.push(e)
            } else {
                newArray.push(e)
            }
        })
        setModBodyState(newArray)
    }


    const modStates = (modState) => {
        setModIdState(modState.element ? modState.element.id : null)
        setModTitleState(modState.element ? modState.element.title : null)
        setModDateState(modState.element ? modState.element.date : null)
        setModSmallPhotoState(modState.element ? modState.element.photoSmall : null)
        setModBodyState(modState.element ? modState.element.body : null)
    }


    useEffect(() => {
        if (!props.isAuth) {
            navigate('/admin');
        }
    }, [props.isAuth, navigate]);

    let newsListState;

    if (props.newsData) {
        if(props.newsData.length !== 0){
            newsListState = props.newsData.map((element) => {
                return (
                    <div className={styles.newsElement} key={element.id}>
                        <span>{`id: ${element.id} | ${element.title} | ${element.date}`}</span>
                        <button onClick={() => { setDeleteState({ state: true, id: element.id }) }}>DEL</button>
                        <button onClick={() => {
                            setModState({ state: true, element: element })
    
                            modStates({ state: true, element: element })
    
                        }}>MOD</button>
                    </div>
                );
            });
        }else{newsListState = <div>Новин нема</div>;}
        
    } else {
        newsListState = <div>Loading...</div>;
    }

    let messageListState

    if (props.messagesData) {
        debugger
        if(props.messagesData.length !== 0){
            messageListState = props.messagesData.map((element) => {
                return (
                    <div className={styles.newsElement} key={element.id}>
                        <span>{`${element.name} | ${element.date}`}</span>
                        <button onClick={() => { setDeleteMessageState({ state: true, id: element.id }) }}>DEL</button>
                        <button onClick={() => { setShowState({ state: true, element: element }) }}>SHOW</button>
                    </div>
                );
            });
        }else{
            messageListState = <div>Повiдомлень нема</div>
        }
        
    } else {
        messageListState = <div>Loading...</div>;
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

                <div className={styles.messageListContent}>
                    <span className={styles.newsListTitle}>Всi повiдомлення</span>
                    <div className={styles.newsList}>
                        <div className={styles.newsListBlock}>
                            {messageListState}
                        </div>

                    </div>
                </div>




                <div className={addNewFormState ? styles.addNewWrapper : styles.addNewWrapperNone}>
                    <div className={styles.addNewContent}>

                        <AddNewForm
                            setNewsThunkCreator={props.setNewsThunkCreator}
                            setAddNewFormState={setAddNewFormState}
                            maxId={maxId}
                            newsData={props.newsData}
                            token={props.token}
                            setDeleteState={setDeleteState} />
                    </div>
                </div>


                <div className={deleteState.state ? styles.deleteWrapper : styles.deleteWrapperNone}>
                    <div className={styles.deletingForm}>
                        <span className={styles.deletingForm_span}>{`Видалити новину з id: ${deleteState.id}`}</span>
                        <div className={styles.deletingForm_buttonWrapper}>
                            <button onClick={() => {

                                props.setNewsThunkCreator(props.token, deleteNewsById(deleteState.id, props.newsData))
                                setDeleteState({ state: false, id: 0 })
                                props.getNewsThunkCreator();
                            }} className={styles.deletingForm_button}> Видалити </button>
                            <button onClick={() => {

                                setDeleteState({ state: false, id: 0 })
                            }} className={styles.deletingForm_button}>Повернутись</button>
                        </div>
                    </div>
                </div>

                <div className={deleteMessageState.state ? styles.deleteWrapper : styles.deleteWrapperNone}>
                    <div className={styles.deletingForm}>
                        <span className={styles.deletingForm_span}>{`Видалити повiдомлення з id: ${deleteMessageState.id}`}</span>
                        <div className={styles.deletingForm_buttonWrapper}>
                            <button onClick={() => {

                                props.delMessagesThunkCreator(props.token, deleteMessageById(deleteMessageState.id, props.messagesData))

                                setDeleteMessageState({ state: false, id: 0 })

                                props.getMessagesThunkCreator(props.token)
                            }} className={styles.deletingForm_button}> Видалити </button>
                            <button onClick={() => {
                                setDeleteMessageState({ state: false, id: 0 })
                            }} className={styles.deletingForm_button}>Повернутись</button>
                        </div>
                    </div>
                </div>


                <div className={modState.state ? styles.modWrapper : styles.modWrapperNone}>
                    <div className={styles.modWindow}>
                        <div className={styles.codeWindow}>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Id: `}</div><input value={modIdState ? modIdState : ""} onChange={(e) => { setModIdState(e.target.value) }}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Title: `}</div><input value={modTitleState ? modTitleState : ""} onChange={(e) => { setModTitleState(e.target.value) }}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Date: `}</div><input value={modDateState ? modDateState : ""} onChange={(e) => { setModDateState(e.target.value) }}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`SmallPhoto: `}</div><input value={modSmallPhotoState ? modSmallPhotoState : ""} onChange={(e) => { setModSmallPhotoState(e.target.value) }}></input></div>
                            <div className={styles.modElement}><div className={styles.modElementSpan}>{`Body: `}</div></div>
                            <div className={styles.modElementBodyWrapper}>
                                {modBodyState ? (modBodyState.map((element) => {
                                    if (element.type === 'text') {
                                        return (
                                            <div className={styles.modElementBody}><span>{`Paragraph: `}</span><input className={styles.modElementBodyInput} value={element.content} onChange={(el) => {

                                                let index = modBodyState.indexOf(element)
                                                modBodyElement_content(index, el.target.value)

                                            }}></input></div>
                                        )
                                    } else if (element.type === 'photo') {
                                        return (
                                            <div className={styles.modElementBody}><span>{`Photo: (Style(side): `}</span><input value={element.style} onChange={(el) => {

                                                let index = modBodyState.indexOf(element)
                                                modBodyElement_style(index, el.target.value)

                                            }}></input><span>{` Src(name): `}</span><input value={element.src} onChange={(el) => {

                                                let index = modBodyState.indexOf(element)
                                                modBodyElement_src(index, el.target.value)

                                            }}></input><span>{`)`}</span></div>
                                        )
                                    }
                                    return null
                                })
                                ) : (<div>something wrong</div>)}
                            </div>

                        </div>
                        <div className={styles.buttonBlock}>
                            <button onClick={() => {
                                props.setNewsThunkCreator(props.token, modNewsById(modState.element.id, props.newsData, { id: modIdState, title: modTitleState, date: modDateState, photoSmall: modSmallPhotoState, body: modBodyState }))

                                setModIdState(null)
                                setModTitleState(null)
                                setModDateState(null)
                                setModSmallPhotoState(null)
                                setModBodyState(null)

                                setModState({ state: false, element: null })
                                props.getNewsThunkCreator();
                            }}>Зберегти</button>
                            <button onClick={() => { setModState({ state: false, element: null }) }}>Повернутись</button>
                        </div>
                    </div>
                </div>



                {showState.state && (
                    <div className={styles.showWrapper}>
                        <div className={styles.showContent}>
                            <div className={styles.id_Date}>
                                <div className={styles.idBlock}>
                                    <span className={styles.idBlockSpan}>Id</span>
                                    <input className={styles.idBlockInput} value={showState.element.id}></input>
                                </div>
                                <div className={styles.dateBlock}>
                                    <span className={styles.dateBlockSpan}>Дата</span>
                                    <input className={styles.dateBlockInput} value={showState.element.date}></input>
                                </div>
                            </div>

                            <div className={styles.name_Email}>
                                <div className={styles.idBlock}>
                                    <span className={styles.idBlockSpan}>Iм'я</span>
                                    <input className={styles.idBlockInput} value={showState.element.name}></input>
                                </div>
                                <div className={styles.dateBlock}>
                                    <span className={styles.dateBlockSpan}>Email</span>
                                    <input className={styles.dateBlockInput} value={showState.element.email}></input>
                                </div>
                            </div>

                            <div className={styles.showBodyBlock}>
                                <span className={styles.bodyBlockSpan}>Повiдомлення</span>
                                <textarea className={styles.bodyBlockTextarea} value={showState.element.body}></textarea>
                            </div>

                            <button onClick={() => { setShowState({ state: false, element: null }) }}>Повернутись</button>
                        </div>
                    </div>
                )}
            </div>
        )
    } else {
        return navigate('/admin')
    }

}

export default AdminPage