import styles from './map.module.css'

const Map = () => {
    return(
        <section className={styles.mapSection}>
            <div className={styles.text}>
                <h2>
                    Локалiзацiя компанії
                </h2>
            </div>

            <div className={styles.mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.9476176472367!2d30.37773867588897!3d50.423447589308495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb93b3f32f6d%3A0x61d7a7d2e34b8d4!2z0LHRg9C7LiDQmtC-0LvRjNGG0L7QstCwLCAxNNCULCDQmtC40LXQsiwg0KPQutGA0LDQuNC90LAsIDAzMTk0!5e0!3m2!1sru!2spl!4v1694169409764!5m2!1sru!2spl"
                    width="100%"
                    height="100%"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
            </div>
        </section>
    )
}

export default Map