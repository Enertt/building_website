import styles from './newsCard.module.css'

const NewsCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <span className={styles.contentDate}>{props.props.date}</span>
                <span className={styles.contentTitle}>{props.props.title}</span>

                <div className={styles.description}>
                    {props.props.body.map((element) => {
                        if (element.type === "text") {
                            return (
                                <p className={styles.elementP}>{element.content}</p>
                            )
                        } else return null
                        //  if (element.type === "photo") {
                        //     return (
                        //         <img src={require(`../../assets/news/${element.src}`)} className={element.style === "L" ? styles.photoL : styles.photoR} />
                        //     )
                        // }
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewsCard