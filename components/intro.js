import Image from "next/image"
import styles from '../styles/Home.module.css'
import diamond from '../public/images/diamond.png'
import union from '../public/images/union.png'

export default function Intro () {
    return (
        <div className={styles.intro}>
            <h1 className={styles.title}>
                <span className={styles.firstLine}>
                    IGNITE
                    <Image
                        src={diamond}
                        alt="diamond"
                    />
                    YOUR
                </span>
                <br/>
                <span className={styles.secondLine}>POTENTIAL</span>
            </h1>
            <Image
                src={union}
                alt="union"
            />
            <p className={styles.description}>
                NAVISTRI empowers the curious and the driven with the acumen to lead in a world of flux. Our learning experiences are designed to arm you with the insight to not just navigate but shape the future. Join us at the edge, where knowledge equals power. 
            </p>
        </div>
    )
}