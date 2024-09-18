import Image from "next/image"
import styles from '../styles/Home.module.css'
import max from '../public/images/max@2x.png'

export default function Max () {
    return (
        <div className={styles.max}>
           <Image className={styles.max_img}
                src={max}
                alt="Max's picture"
            />
        </div>
    )
}