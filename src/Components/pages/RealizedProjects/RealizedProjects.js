import styles from './realizedProjects.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'
import img1 from '../../../assets/swiper/sw1.png'
import guliwer1 from '../../../assets/Projects/realized/Guliwer/гулливер 1.jpeg'
import guliwer2 from '../../../assets/Projects/realized/Guliwer/гулливер 2.jpeg'
import guliwer3 from '../../../assets/Projects/realized/Guliwer/гулливер 3.jpeg'

import Header from '../../Header/Header'

const AboutCompany = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.firstSection}>
                
                {/* <Header color={''}/>  FOR BLACK*/}
                {/* <Header color={'white'}/>  FOR WHITE*/}
                <Header color={'white'}/>

                <div className={styles.textWrapper}>
                    

                    <div className={styles.ourOptions}>
                        <span>Реалізовані проекти</span>

                        <div className={styles.optionList}> 
                        {/* optionList ЗАБЛЮРЕНО */}
                            <div  className={styles.optionCard}>
                                <span>Багатопрофільний 34-поверховий торговий комплекс «Гулівер» у м.Києві, Спортивна площа, 1</span>
                                
                                <p>
                                    <img className={styles.optionCardImgL} src={guliwer1} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgR} src={guliwer2} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgL} src={guliwer3} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </p>
                            </div>

                            <div  className={styles.optionCard}>
                                <span>Бізнес центр А класу «Сенатор» у м. Києві, вул. Князів Острозьких, 32/2</span>
                                
                                <p>
                                    <img className={styles.optionCardImgR} src={guliwer1} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgL} src={guliwer2} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgR} src={guliwer3} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </p>
                            </div>

                        </div>


                        <span>Будуємо</span>

                        <div className={styles.optionList}>
                            {/* optionList ЗАБЛЮРЕНО */}
                            <div  className={styles.optionCard}>
                                <img src={img1} />
                                <p>
                                    <span>Будинок 1</span><br/>
                                    - Прогнозування інвестиційних очікувань<br/>
                                    - Вивчення конкурентного середовища<br/>
                                    - Статистичні дані<br/>
                                    - Прогнозування ступеня затребуваності проекту потенційними споживачами<br/>
                                    - Альтернативні концепції<br/>
                                    - Оцінювання ризику інвестиційного проєкту<br/>
                                </p>
                            </div>

                            

                        </div>


                        <span>Реконструюємо</span>

                        <div className={styles.optionList}>
                            {/* optionList ЗАБЛЮРЕНО */}
                            <div  className={styles.optionCard}>
                                <img src={img1} />
                                <p>
                                    <span>Будинок 1</span><br/>
                                    - Прогнозування інвестиційних очікувань<br/>
                                    - Вивчення конкурентного середовища<br/>
                                    - Статистичні дані<br/>
                                    - Прогнозування ступеня затребуваності проекту потенційними споживачами<br/>
                                    - Альтернативні концепції<br/>
                                    - Оцінювання ризику інвестиційного проєкту<br/>
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