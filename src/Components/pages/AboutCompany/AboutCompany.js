import styles from './aboutCompany.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'
import img1 from '../../../assets/swiper/sw1.png'
import img2 from '../../../assets/swiper/sw2.png'
import img3 from '../../../assets/swiper/sw3.png'
import img4 from '../../../assets/swiper/sw4.png'
import img5 from '../../../assets/swiper/sw5.png'

const AboutCompany = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>
                <header className={styles.header}>

                    
                        <NavLink to='/'>
                        <div className={styles.logo}>
                            <span>ВЛАСТ</span>
                            <span>БУД</span>
                            </div>
                        </NavLink>
                       
                    
                    
                    <div className={styles.navigation}>
                        <Nav />
                    </div>
                </header>

                <div className={styles.textWrapper}>
                    <div className={styles.aboutCompany}>
                        <span>ТОВ «ВЛАСТ БУД»</span>
                        <p>
                            Будівельна компанія ТОВ «ВЛАСТ БУД» входить до групи будівельних
                            компаній ВЛАСТ ГРУПА, яка охоплює весь спектр робіт у реалізації
                            проектів від створення концепції, розробки проекту до здачі об&#39;єкта в
                            експлуатацію, а також продажу площ.
                            У групі будівельних компаній ТОВ «ВЛАСТ БУД» успішно виконує функції
                            Керуючої компанії та Генерального підрядника.
                            Компанія успішно виконує роботи у сфері будівництва (багатоповерхові
                            житлові та громадські будівлі, котеджі) та ремонту (капітальний або
                            косметичний ремонт, демонтаж конструкцій, оздоблення квартир, кафе,
                            офісів).
                        </p>
                        <hr/>
                    </div>

                    <div className={styles.ourOptions}>
                        <span>Нашi можливостi</span>

                        <div className={styles.optionList}>
                            <div  className={styles.optionCard}>
                                <img src={img1} />
                                <p>
                                    <span>Маркетинг</span><br/>
                                    - Прогнозування інвестиційних очікувань<br/>
                                    - Вивчення конкурентного середовища<br/>
                                    - Статистичні дані<br/>
                                    - Прогнозування ступеня затребуваності проекту потенційними споживачами<br/>
                                    - Альтернативні концепції<br/>
                                    - Оцінювання ризику інвестиційного проєкту<br/>
                                </p>
                            </div>

                            <div className={styles.optionCardR}>
                                <p>
                                    <span>Землевідведення</span><br/>
                                    - Розробка проєкту відведення земельної ділянки<br/>
                                    - Оформлення права власності або оренди земельної ділянки<br/>
                                </p>
                                <img src={img2} />
                            </div>

                            <div className={styles.optionCard}>
                            <img src={img3} />
                                <p>
                                    <span>Розроблення концепцій</span><br/>Розроблення концепції майбутнього проєкту
                                    Роботи, що виконуються до початку проектування:

                                    - коефіцієнт забудови ділянки;<br/>
                                    - розробка принципових об&#39;ємно-просторових, планувальних,
                                    містобудівних рішень;<br/>
                                    - визначення інженерної характеристики проекту;<br/>
                                    - складання завдань на інженерні вишукування;<br/>
                                    - складання завдання на проектування;<br/>
                                    - інші види робіт, необхідних для початку процесу;<br/>
                                    - проектування (обстеження існуючих будівель, визначення необхідного<br/>
                                    знесення існуючих будівель, зелених насаджень та ін.).
                                </p>
                            </div>

                            <div className={styles.optionCardBigR}>
                                <p>
                                    <span>Супровід проектування</span><br/>
                                    Збір і підготовка вихідних даних:
                                    - АПЗ;<br/>
                                    - технічні умови;<br/>
                                    - геологічні дослідження;<br/>
                                    - історичні вишукування;<br/>
                                    - складання тех. завдання на проектування.<br/><br/>
                                    Стадія «П» (Проект)
                                    Розділи проекту:<br/>
                                    - пояснювальна записка:<br/>
                                    - 1. загальні положення;<br/>
                                    - 2. архітектурно-будівельні рішення;<br/>
                                    - 3. технологічна частина;<br/>
                                    - 4. рішення щодо технологічного обладнання;<br/>

                                    - графічна частина;<br/>
                                    - розділ організації будівництва;<br/>
                                    - кошторисна документація;<br/>
                                    - вплив на навколишнє середовище.<br/>

                                    Проходження державної експертизи, затвердження, реєстрація та погодження
                                    в установленому порядку
                                    Отримання дозволу на будівництво<br/><br/>

                                    Стадія «Р» (розробка робочої документації)<br/>

                                    - робочі креслення (розробляються відповідно до вимог нормативних
                                    документів);<br/>
                                    - паспорт оздоблювальних робіт;<br/>
                                    - кошторисна документація;<br/>
                                    - специфікація обладнання та матеріалів (включно з опитувальними
                                    листами та габаритними кресленнями на відповідними видами
                                    обладнання та виробів;<br/>
                                    - затвердження проектної документації в Інвестора.<br/>
                                </p>
                                <img src={img4} />
                            </div>

                            <div className={styles.optionCardBigL}>
                            <img src={img5} />
                                <p>
                                    <span>Будівництво</span><br/>
                                    Функції Керуючої компанії:<br/>
                                    - проведення тендерів та укладення договорів із генеральною<br/> проектною
                                    організацією;<br/>
                                    - визначення основної стратегії будівництва (генеральний графік<br/>
                                    будівництва та фінансування);<br/>
                                    - визначення черговості будівництва та пускових комплексів;<br/>
                                    - проведення тендерів та укладення договорів з іншими суб&#39;єктами<br/>
                                    будівництва (виконання функцій Замовника та Генерального
                                    підрядника).<br/><br/>

                                    Виконання функцій Замовника:<br/>
                                    - аналіз проектно-кошторисної документації;<br/>
                                    - технічний контроль і нагляд за ходом будівництва;<br/>
                                    - прийняття закінчених обсягів робіт і здача об&#39;єкта в експлуатацію;<br/>
                                    - передача технічної та виконавчої документації експлуатуючій
                                    організації.<br/><br/>

                                    Виконання функцій Генерального підрядника:<br/>
                                    - підготовка будівельного виробництва;<br/>
                                    - координація робіт субпідрядних організацій;<br/>
                                    - матеріально-технічне забезпечення будівельних робіт;<br/>
                                    - забезпечення заходів з охорони праці та техніки безпеки;<br/>
                                    - передача Замовнику закінченого об&#39;єкта будівництва, згідно з актом
                                    робочої комісії з усією робочою документацією;<br/>
                                    - видача гарантійного паспорта на об&#39;єкт.<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.footer}><Footer/></div>
                
            </div>
            
        </div>
    )
}
export default AboutCompany