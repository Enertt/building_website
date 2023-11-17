import styles from './faceOfCompany.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'
import personImg from '../../../assets/image1561.png'
import Header from '../../Header/Header'

const FaceOfCompany = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>

                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={''}/>

                <div className={styles.textWrapper}>
                    <div className={styles.aboutCompany}>

                        <div className={styles.sectionOne}>
                            <div className={styles.description}>
                                <div className={styles.name}>
                                    <span>Власов Віктор</span>
                                    <span>Васильович</span>
                                </div>
                                
                                <p className={styles.descriptionText}>
                                    Переможець міжнародного конкурсу
                                    «Підприємець року-2006» в Україні (Entrepreneur Of The Year Award),
                                    організованого компанією «Эрнст энд Янг» у номінації «Будівництво й
                                    нерухомість». Має почесну нагороду «Інтелект нації» (2007 р.). Відзначений
                                    міжнародною нагородою Асамблеї ділових кіл І ступеня &quot;Золотий меркурій&quot;
                                    за особистий внесок у розвиток інтеграційних процесів, належить до
                                    рейтингу 10 найкращих девелоперів України.
                                </p>
                            </div>

                            {/* <div className={styles.photo}>
                                <img className={styles.img}/>
                            </div> */}


                            {/* <div className={styles.additional_info}>
                                <div className={styles.list}>
                                    <div className={styles.listItem}>
                                        <span className={styles.spanTitle}>РОКИ ДОСВIДУ</span>
                                        <span className={styles.spanNumber}>10+</span>
                                    </div>

                                    <div className={styles.listItem}>
                                        <span className={styles.spanTitle}>ЗАВЕРШЕНІ ПРОЄКТИ</span>
                                        <span className={styles.spanNumber}>45+</span>
                                    </div>

                                    <div className={styles.listItem}>
                                        <span className={styles.spanTitle}>КІЛЬКІСТЬ КЛІЄНТІВ</span>
                                        <span className={styles.spanNumber}>30+</span>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className={styles.sectionTwo}>
                            <div className={styles.about}>
                                <span className={styles.spanAbout}>БIОГРАФIЯ</span>
                                <p>Народився 26 березня 1963 року у м. Екабпілсі (Латвія), у родині військового
                            службовця.
                            З вересня 1980 р. по червень 1989 р. - курсант Ризького військового
                            авіаційного училища ім. Якова Алксніса, по закінченні якого отримав диплом
                            інженера-електрика.
                            3 1985 р. по 1989 р. служив у Далекосхідному окрузі в авіаційному полку на
                            посаді інженера полку. З січня 1990 року по серпень 1992 року працював на
                            заводі &quot;Росток&quot; на посаді інженера-електронника.
                            3 серпня 1992 року по листопад 2003 року працював у Головному управлінні
                            житлового забезпечення КМДА на посаді заступника директора &quot;Житло-
                            Інвест&quot;.
                            За роки трудової діяльності нагороджений подякою від Київського міського
                            голови за вагомий внесок у розвиток будівельної галузі й високий
                            професіоналізм (2003 р.), Грамотами Верховної Ради України за заслуги
                            перед українським народом (2004 р.), Державного комітету України з питань
                            регуляторної політики й підприємництва за вагомий внесок у реформування
                            національної економіки, розвиток підприємництва й формування ринкової
                            інфраструктури в Україні (2005 р.). Переможець міжнародного конкурсу
                            «Підприємець року-2006» в Україні (Entrepreneur Of The Year Award),
                            організованого компанією «Эрнст энд Янг» у номінації «Будівництво й
                            нерухомість». Має почесну нагороду «Інтелект нації» (2007 р.). Відзначений
                            міжнародною нагородою Асамблеї ділових кіл І ступеня &quot;Золотий меркурій&quot;
                            за особистий внесок у розвиток інтеграційних процесів, належить до
                            рейтингу 10 найкращих девелоперів України.
                            Відзнаки та нагороди В.В. Власова характеризують його як професіонала,
                            неординарного топ-девелопера, людину з бездоганною репутацією і
                            справжнього керівника.</p>
                            </div>
                            <div className={styles.photos}></div>
                        </div>

                        <div className={styles.sectionThree}>
                            <div className={styles.contentWrapper}></div>
                        </div>
                        {/* <span>Власов Віктор Васильович</span>
                        <div className={styles.text}>

                            <div className={styles.textImg}>
                                <img src={personImg}/>
                            </div>
                            <p>
                            Народився 26 березня 1963 року у м. Екабпілсі (Латвія), у родині військового
                            службовця.
                            З вересня 1980 р. по червень 1989 р. - курсант Ризького військового
                            авіаційного училища ім. Якова Алксніса, по закінченні якого отримав диплом
                            інженера-електрика.
                            3 1985 р. по 1989 р. служив у Далекосхідному окрузі в авіаційному полку на
                            посаді інженера полку. З січня 1990 року по серпень 1992 року працював на
                            заводі &quot;Росток&quot; на посаді інженера-електронника.
                            3 серпня 1992 року по листопад 2003 року працював у Головному управлінні
                            житлового забезпечення КМДА на посаді заступника директора &quot;Житло-
                            Інвест&quot;.
                            {За роки трудової діяльності нагороджений подякою від Київського міського
                            голови за вагомий внесок у розвиток будівельної галузі й високий
                            професіоналізм (2003 р.), Грамотами Верховної Ради України за заслуги
                            перед українським народом (2004 р.), Державного комітету України з питань
                            регуляторної політики й підприємництва за вагомий внесок у реформування
                            національної економіки, розвиток підприємництва й формування ринкової
                            інфраструктури в Україні (2005 р.). Переможець міжнародного конкурсу
                            «Підприємець року-2006» в Україні (Entrepreneur Of The Year Award),
                            організованого компанією «Эрнст энд Янг» у номінації «Будівництво й
                            нерухомість». Має почесну нагороду «Інтелект нації» (2007 р.). Відзначений
                            міжнародною нагородою Асамблеї ділових кіл І ступеня &quot;Золотий меркурій&quot;
                            за особистий внесок у розвиток інтеграційних процесів, належить до
                            рейтингу 10 найкращих девелоперів України.}
                            Відзнаки та нагороди В.В. Власова характеризують його як професіонала,
                            неординарного топ-девелопера, людину з бездоганною репутацією і
                            справжнього керівника.
                            </p>
                        </div> */}
                        
                    </div>
                    
                </div>
                <div className={styles.footer}><Footer/></div>
                
            </div>
            
        </div>
    )
}
export default FaceOfCompany