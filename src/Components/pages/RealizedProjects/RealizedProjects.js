import styles from './realizedProjects.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'
import img1 from '../../../assets/swiper/sw1.png'
import guliwer1 from '../../../assets/Projects/realized/Guliwer/гулливер 1.jpeg'
import guliwer2 from '../../../assets/Projects/realized/Guliwer/гулливер 2.jpeg'
import guliwer3 from '../../../assets/Projects/realized/Guliwer/гулливер 3.jpeg'

import senator1 from '../../../assets/Projects/realized/Senator/сенатор 1.jpg'
import senator2 from '../../../assets/Projects/realized/Senator/сенатор 2.jpg'
import senator3 from '../../../assets/Projects/realized/Senator/сенатор 3.jpg'
import senator4 from '../../../assets/Projects/realized/Senator/сенатор 4.jpg'

import mandarin1 from '../../../assets/Projects/realized/Mandarin/mandarin1.jpg'

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
                                    <img className={styles.optionCardImgR} src={senator1} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgL} src={senator2} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgR} src={senator3} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgL} src={senator4} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </p>
                            </div>

                            <div  className={styles.optionCard}>
                                <span>Участь у будівництві та оздоблювальних роботах торгово-офісного центру «Мандарин-Плаза», м. Київ, Бессарабський квартал</span>
                                
                                <p>
                                    <img className={styles.optionCardImgR} src={mandarin1} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    <img className={styles.optionCardImgL} src={mandarin1} />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                
                                </p>
                            </div>

                        </div>


                        <span>Будуємо</span>

                        <div className={styles.optionList}>
                            ...

                            

                        </div>


                        <span>Реконструюємо</span>

                        <div className={styles.optionList}>
                            ...

                            

                        </div>
                    </div>
                    
                </div>
                <div className={styles.footer}><Footer/></div>
                
            </div>
            
        </div>
    )
}
export default AboutCompany