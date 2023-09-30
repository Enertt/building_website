import styles from './contacts.module.css'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { useState } from 'react'
import { API } from '../../../api/api'
import { format } from 'date-fns';

const Contacts = () => {
    const [formState, setFormState] = useState(false)
    const [okState, setOkState] = useState(false)

    const [nameState, setNameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [messageState, setMessageState] = useState('')

    return (
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>

                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={'white'}/>

                <div className={styles.textWrapper}>
                    <div className={styles.content}>
                        <div className={styles.addres}>
                            <p><strong>Контакти ТОВ "ВЛАСТ БУД"</strong></p><br></br>

                            <p>03194, м.Київ, Святошинський район</p>
                            <p>бул.Кольцова, 14Д, офіс 610</p>
                            <p>тел./факс: (+38067) 504-27-71</p>
                            <p> e-mail: vlastbud9@gmail.com</p>

                            <button onClick={()=>{setFormState(!formState)}} className={styles.addresButton}>Залишити повiдомлення</button>
                        </div>

                        <section className={styles.mapSection}>
                            
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.9476176472367!2d30.37773867588897!3d50.423447589308495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb93b3f32f6d%3A0x61d7a7d2e34b8d4!2z0LHRg9C7LiDQmtC-0LvRjNGG0L7QstCwLCAxNNCULCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAzMTk0!5e0!3m2!1sru!2spl!4v1694169409764!5m2!1sru!2spl"
                                    width="100%"
                                    height="100%"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                >
                                </iframe>
                            
                        </section>
                    </div>

                </div>
                <div className={styles.footer}><Footer /></div>
            </div>
            {formState && (
                <div className={styles.formWrapper}>
                    <div className={styles.form}>
                        <svg className={styles.formSvg} onClick={()=>{setFormState(!formState)}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>

                        <div className={styles.userDataBlock}>
                            <div className={styles.name}>
                                <span>Ваше Iм'я</span>
                                <input onChange={(e) => {setNameState(e.target.value)}} value={nameState} placeholder='Петро Петров'></input>
                            </div>
                            <div className={styles.email}>
                                <span>Ваш Email</span>
                                <input onChange={(e) => {setEmailState(e.target.value)}} value={emailState} placeholder='petro123@gmail.com'></input>
                            </div>
                        </div>

                        <div className={styles.messageBlock}>
                            <span>Ваше Повiдомлення</span>
                            <textarea onChange={(e) => {setMessageState(e.target.value)}} value={messageState}></textarea>
                        </div>

                        <button className={styles.send} onClick={()=>{

                            const currentDate = new Date();
                            const currentTimeInMillis = currentDate.getTime();
                            const currentTimeInSeconds = Math.floor(currentTimeInMillis / 1000);
                            API.sendMessage({id: currentTimeInSeconds, name: nameState, email: emailState, date: format(new Date(), 'dd-MM-yyyy'), body: messageState})
                            setNameState('')
                            setEmailState('')
                            setMessageState('')

                            setOkState(true)
                        }}>Надiслати</button>
                        

                        {okState && (
                        <div className={styles.okWrapper}>
                            <span>Повiдомлення надiслано!</span>
                            <div className={styles.okSvg}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                                </svg> 
                            </div>
                            

                            <button onClick={()=>{
                                setFormState(false)
                                setOkState(false)
                                }}>Повернутись</button>
                        </div>)}
                    </div>
            </div>
            )}
        </div>
    )
}
export default Contacts