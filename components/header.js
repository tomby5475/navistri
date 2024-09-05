import Image from "next/image"
import logo from '../public/logo.png'
import arrow from '../public/images/glyph.png'
import styles from '../styles/Home.module.css'

export default function Header () {
    return (
        <div className={styles.nav}>
            <Image
                src={logo}
                alt="logo"
            />
            <div className={styles.login_btn_wrapper}>
                <button className={styles.login_btn}> 
                    LOGIN 
                    <Image className={styles.login_arrow}
                        src={arrow} 
                        alt="arrow" 
                    />
                </button>
            </div>
        </div>
    )
}