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
                                    Багатофункціональний комплекс «Gulliver» (укр. «Гулівер») — споруда «бізнес-класу» в Києві. З висотою 141,8 м він посідає друге місце як найвищий будинок України. Будівля складається з двох блоків: 35-поверхового бізнес-центру та 16-поверхового розважального комплексу.
                                    <img className={styles.optionCardImgR} src={guliwer2} />
                                    «Гуллівер» — багатофункціональний торгово-розважальний центр загальною площею понад 150 000 м², який розділено на два блоки.

Перший блок: торгово-розважальна частина, розташована на 10-ти поверхах, та 6-поверхова надбудова над розважальним комплексом. Інфраструктура торгово-розважальної частини містить: підземний супермаркет, площею понад 9 000 м², далі на перших 4-х поверхах розмістяться бутіки, вище буде знаходитися боулінг на 24 доріжки, 7-зальний кінотеатр, дитяча ігрова зона, ресторани, салони краси, фітнес-клуб із 25-метровим басейном.
                                    <img className={styles.optionCardImgL} src={guliwer3} />
                                    Другий блок: 33-поверховий (35 поверхів із технічними) бізнес-центр, який складатиметься з офісних приміщень преміум-класу.

Послуги телекомунікаційні будуть надавати декілька операторів і один з них є ТОВ «Укрком».
Конструкція монолітно-каркасна.
Висота стелі 3,6 м.
У бізнес-центрі розташовані 8 високошвидкісних ліфтів ThyssenKrupp Elevator (швидкість 4 м/c, вантажопідйомність — 1000 кг)
У ТРЦ знаходяться 20 ліфтів (4 панорамні і 16 звичайних), в розважальному центрі 10 ескалаторів.
Інженерні сітки: автономна котельня, аварійний дизельний генератор і три трансформаторні підстанції. Будівлю обладнано системами кондиціювання, тепло- та водопостачання.
Підземний 3-рівневий паркінг на 600 машиномісць, а також надземний паркінг на 150 машиномісць.
                                
                                </p>
                            </div>

                            <div  className={styles.optionCard}>
                                <span>Бізнес центр А класу «Сенатор» у м. Києві, вул. Князів Острозьких, 32/2</span>
                                
                                <p>
                                    <img className={styles.optionCardImgR} src={senator1} />
                                    Бізнес-центр Сенатор – один із найпрестижніших офісних центрів класу «А» у Києві. Розташований у Печерському районі на вул. Московська 32/2 у центрі ділового та політичного життя міста. З 2013 року будова не втрачає актуальності та продовжує приваблювати своєю презентабельністю. Наявність необхідної інфраструктури всередині та зовні будівлі, технічні можливості та близькість до центру міста роблять оренду тут максимально комфортною. Добратися до бізнес-центру не важко, як на автомобілі, так і на громадському транспорті. Найближчі станції метро «Печерська», «Арсенальна» та «Кловська» знаходяться в пішій доступності.
                                    <img className={styles.optionCardImgL} src={senator2} />
                                    БЦ «Senator» має загальну площу 53715 м.кв. та 19 поверхами. В оренду пропонується великий вибір офісів від 90 до 2250 кв. Всі офіси мають вільне планування та якісне чистове оздоблення. Додаткове природне освітлення одержують за рахунок панорамних вікон. Уникнути стовпотворіння під час переміщення між поверхами допомагають 8 безшумних ліфтів, які комфортно розподіляють завантаженість бізнес-центру.
                                    <img className={styles.optionCardImgR} src={senator3} />
                                    Орендарям гарантований високий рівень сервісу та високотехнологічні системи життєзабезпечення. Підземний паркінг розрахований на 156 місць. Цілодобове відеоспостереження та охоронна система забезпечують безпеку та збереження автомобілів, а також майна на всій території комплексу. Припливно-витяжна система вентиляції та система кондиціонування
                                    <img className={styles.optionCardImgL} src={senator4} />
                                    приміщень встановлена ​​з можливістю регулювання мікроклімату у кожному офісі індивідуально. Центральна опалювальна система забезпечує тепло в офісах у холодну пору року. Протипожежна система безпеки відповідає всім необхідним нормам. Безперебійну роботу інтернету за будь-яких навантажень забезпечують оптоволоконні комунікації.
                                
                                </p>
                            </div>

                            <div  className={styles.optionCard}>
                                <span>Участь у будівництві та оздоблювальних роботах торгово-офісного центру «Мандарин-Плаза», м. Київ, Бессарабський квартал</span>
                                
                                <p>
                                    <img className={styles.optionCardImgR} src={mandarin1} />
                                    Торгово-розважальний центр «Мандарин плаза» розташований в районі Бессарабської площі. З давніх часів сюди люблять приходити і кияни, і гості столиці помилуватися величезним асортиментом ексклюзивного товару і вибрати розкішні подарунки для себе і своєї сім'ї.

Фейєрверк вогнів, блиск вітрин, приємна музика, вивіски відомих брендів, чудовий інтер'єр - все розташовує до приємного і корисного проведення часу. А ескалатори і швидкісні ліфти доставлять вас на будь-який з 7 поверхів задоволення. Ніде в Україні ще немає більш масштабного комплексу, під дахом якого зібрано таку величезну кількість кращих товарів, представлених міжнародними брендами в ціновій політиці вище середнього.
                                
                                </p>
                            </div>

                        </div>


                        {/* <span>Будуємо</span>

                        <div className={styles.optionList}>
                            ...

                            

                        </div>


                        <span>Реконструюємо</span>

                        <div className={styles.optionList}>
                            ...

                            

                        </div> */}
                    </div>
                    
                </div>
                <div className={styles.footer}><Footer/></div>
                
            </div>
            
        </div>
    )
}
export default AboutCompany