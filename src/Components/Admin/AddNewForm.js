import styles from "./addNew.module.css"
import dataJson from '../pages/News/news.json'
import { format } from 'date-fns';
import addNews from "./JsScripts/addNews";
import { API } from "../../api/api";
import axios from "axios";


import { useState } from "react"
import { Form } from "react-router-dom";

const AddNewForm = (props) => {
    const [addButtonsState, setAddButtonState] = useState({ addP: false, addImg: false })
    const [newParagraphState, setNewParagraphState] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);

    const [sideButtonsState, setSideButtonsState] = useState({ l: true, r: false })

    const [base64Image, setBase64Image] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        if (file) {

            
            // Создаем объект FileReader для чтения файла
            const reader = new FileReader();

            // Событие, которое происходит после успешного чтения файла
            reader.onload = function (event) {
                const base64Data = event.target.result;
                
                setBase64Image(base64Data)

                // Генерируем уникальное имя файла (или используйте оригинальное имя)
                //   const fileName = file.name;

                // Добавляем файл в массив фотографий
                setPhotosArray(prevPhotosArray => [...prevPhotosArray, file]);
                setBodyImgSrc(file);
                console.log(file)
            };

            // Читаем файл как Data URL
            reader.readAsDataURL(file);
        }

    };

    const [newsObject, setNewsObject] = useState(
        {
            id: props.maxId + 1,
            title: null,
            date: null,
            photoSmall: null,
            body: []
            // [
            //     {"type": "text", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"},
            //     {"type": "photo", "style": "R", "src": "1/small"}
            // ]
        })

    const [bodyState, setBodyState] = useState([])

    const [newsObjectId, setNewsObjectId] = useState(props.maxId + 1)
    const [newsObjectTitle, setNewsObjectTitle] = useState(null)
    const [newsObjectDate, setNewsObjectDate] = useState(format(new Date(), 'dd-MM-yyyy'))
    const [newsObjectPhotoSmall, setNewsObjectPhotoSmall] = useState(null)
    const [newsObjectBody, setNewsObjectBody] = useState(null)


    const [bodyTextContent, setBodyTextContent] = useState(null)

    const [bodyImgStyle, setBodyImgStyle] = useState(null)
    const [bodyImgSrc, setBodyImgSrc] = useState(null)


    const [photosArray, setPhotosArray] = useState([])



    const handleSaveNews = () => {

        props.setNewsThunkCreator(props.token, addNews({
            id: newsObjectId, 
            title: newsObjectTitle, 
            date: newsObjectDate,
            photoSmall: photosArray[0],
            body: bodyState,
        },props.newsData))
        
        
        

        // photosArray.map((element, index)=>{
        //     const photos = new FormData()

        //     photos.append("token", props.token)
        //     photos.append("id", newsObjectId)
        //     photos.append("files", element)
        //     photos.append("index", index)

        //     console.log(element)
        //     API.setImg(photos)
        // })
        

        

        props.setAddNewFormState(false)
        setNewsObjectTitle('')
        setNewsObjectDate(format(new Date(), 'dd-MM-yyyy'));
        setNewsObjectPhotoSmall(null)
        setBodyState([])
        setPhotosArray([]);

    };

    return (
        <div className={styles.wrapper}>
            <svg onClick={() => {
                props.setAddNewFormState(false)
                setNewsObjectTitle('')
                setNewsObjectDate(null)
                setNewsObjectPhotoSmall(null)
                setBodyState([])
            }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            <input className={styles.titleInput} placeholder='Назва новини' value={newsObjectTitle} onChange={(e) => { setNewsObjectTitle(e.target.value) }}></input>
            <div className={styles.contentBlock}>
                <div className={styles.addButtonBlock}>
                    <button onClick={() => { setAddButtonState({ addP: true, addImg: false }) }} className={styles.addContentButton}>Додати параграф</button>
                    {/* <button onClick={() => { setAddButtonState({ addP: false, addImg: true }) }} className={styles.addContentButton}>Додати фотографiю</button> */}
                </div>

                <div className={styles.addedItemsList}>
                    {bodyState.map((element) => {
                        if (element.type === 'text') {
                            return (<>
                            <span className={styles.previevSpan}>{`${element.content}`}</span><br/></>
                                
                            )
                        } else if (element.type === 'photo') {
                            return (
                                <div className={element.style === 'L' ? styles.previevBlockL : styles.previevBlockR}>
                                    <span className={styles.previevSpan}>{`[${element.type} | Style: ${element.style} | Src: ${element.src}]`}</span>
                                </div>
                            )
                        }
                    })
                    }
                </div>
            </div>
            <button onClick={() => {handleSaveNews()}} className={styles.buttonSave}>Зберегти новину</button>





            <div className={addButtonsState.addP ? styles.addPWrapper : styles.addPWrapperNone}>
                <span className={styles.formTitle}>Додати параграф</span>
                <svg onClick={() => { setAddButtonState({ addP: false, addImg: false }) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                <textarea className={styles.textareaP} value={bodyTextContent} onChange={(e) => { setBodyTextContent(e.target.value) }}></textarea>
                <button className={styles.saveButtonP} onClick={() => {
                    setBodyState(prevBodyState => [...prevBodyState, { type: 'text', content: bodyTextContent }])
                    setAddButtonState({ addP: false, addImg: false })
                    setBodyTextContent('')
                }}>Зберегти параграф</button>

            </div>

            <div className={addButtonsState.addImg ? styles.addImgWrapper : styles.addImgWrapperNone}>
                <span className={styles.formTitle}>Додати фотографiю</span>
                <svg onClick={() => { setAddButtonState({ addP: false, addImg: false }) }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>

                <input className={styles.inputImg} type="file" accept="image/*" onChange={handleFileChange} />
                <div className={styles.imgWrapperBlock}>
                    <button onClick={() => {
                        setSideButtonsState({ l: true, r: false })
                    }} className={sideButtonsState.l ? styles.sideButtonActive : styles.sideButton}>Фото буде по лiвiй сторонi</button>
                    <div className={styles.imgWrapper}>
                        {selectedFile && <img className={styles.img} src={URL.createObjectURL(selectedFile)} alt="Selected" />}
                    </div>
                    <button onClick={() => {
                        setSideButtonsState({ l: false, r: true })
                    }} className={sideButtonsState.r ? styles.sideButtonActive : styles.sideButton}>Фото буде по правiй сторонi</button>
                </div>

                <button onClick={() => {
                    if (selectedFile) {
                        // setPhotosArray(prevPhotosArray => [...prevPhotosArray, selectedFile.file])
                        setBodyImgSrc(selectedFile.name)
                        debugger
                        if (sideButtonsState.l) {
                            setBodyImgStyle('L')
                            setBodyState(prevBodyState => [...prevBodyState, { type: 'photo', style: 'L', src: selectedFile.name }])
                        } else if (sideButtonsState.r) {
                            setBodyImgStyle('R')
                            setBodyState(prevBodyState => [...prevBodyState, { type: 'photo', style: 'R', src: selectedFile.name }])
                        }
                        setSelectedFile(null);
                        setBodyImgStyle(null);
                        setBase64Image('')
                    }
                    setAddButtonState({ addP: false, addImg: false })
                }} className={styles.saveButtonImg}>Зберегти фотографiю</button>
            </div>
        </div>
    )
}

export default AddNewForm