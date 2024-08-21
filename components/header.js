import Image from "next/image"
import logo from '../public/logo.png'
import arrow from '../public/images/glyph.png'

export default function Header () {
    return (
        <div className="nav">
            <Image
                src={logo}
                alt="logo"
            />
            <button>LOGIN <Image 
                            src={arrow} 
                            alt="arrow" 
                            />
            </button>
        </div>
    )
}