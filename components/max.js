import Image from "next/image"
import styles from '../styles/Home.module.css'
import max from '../public/images/max@2x.png'

export default function Max () {
    return (
        <div className={styles.tutor}>
           <Image className={styles.tutor_img}
                src={max}
                alt="Max's picture"
            />
            <article className={styles.tutor_about}>
                <h2>Impactful Storytelling</h2>
                <p>In the age of wars, misinformation, and climate change, unveiling the truth through effective narratives is more important than ever. At NAVISTRI, I share insights gleaned from our work in the Ukrainian PR Army. </p>
                <hr/>
                <strong>Max Souschuk</strong>
                <div className={styles.socialBtns}>
                    <a href="https://www.linkedin.com/in/sushchuk">LinkedIn</a>
                    <a href="https://bsky.app/profile/sushchuk.bsky.social">BlueSky</a>
                </div>
            </article>
        </div>
    )
}