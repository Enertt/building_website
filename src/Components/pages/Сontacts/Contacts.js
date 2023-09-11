import styles from './contacts.module.css'
import { NavLink } from 'react-router-dom'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'

const Contacts = () => {
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
                    <div className={styles.content}>
                        <div className={styles.addres}>
                            <p><strong>Контакти ТОВ "ВЛАСТ БУД"</strong></p><br></br>

                            <p>03194, м.Київ, Святошинський район</p>
                            <p>бул.Кольцова, 14Д, офіс 610</p>
                            <p>тел./факс: (+38067) 504-27-71</p>
                            <p> e-mail: vlastbud9@gmail.com</p>
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

        </div>
    )
}
export default Contacts