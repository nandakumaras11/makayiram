import { menuDetails } from "../../Constents"
import { FaBars, FaFacebookSquare, FaInstagram, FaTimes, FaYoutube } from "react-icons/fa"
import { logo } from "../../Images"
import { NavHashLink } from 'react-router-hash-link'
import "./Menu.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export const Menu = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, handleMobileMenu] = useState(false);
    return (
        <>
            <div className={isMobileMenuOpen ? "menuContainer mobilemenu translateZero" : "menuContainer mobilemenu"}>
                <div className="mobileMenuClose mobileOnly" onClick={() => handleMobileMenu(false)}><FaTimes /></div>
                <MenuLinks handleMobileMenu={handleMobileMenu}>
                    <div className="menuItem logo desktopOnly" onClick={() => { navigate("/") }} style={{ backgroundImage: `url(${logo})` }}></div>
                </MenuLinks>
                <div className="menuItem socialmedia ratesreservation"><SocialMediaMenu /></div>

            </div>
            <div className="mobileMenuOpener mobileOnly" onClick={() => handleMobileMenu(true)}><FaBars /></div>
        </>
    )
}

export const SocialMediaMenu = () => {
    return (
        <div className="socialMediaContainer">
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_FB, '_self', 'rel=noopener noreferrer')}><FaFacebookSquare /></div>
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_INSTA, '_self', 'rel=noopener noreferrer')}><FaInstagram /></div>
            <div className="faceBook" onClick={() => window.open(import.meta.env.VITE_YOUTUBE, '_self', 'rel=noopener noreferrer')}><FaYoutube /></div>
            {/* <div className="faceBook"><FaInstagram /></div>
            <div className="faceBook"><FaYoutube /></div> */}
        </div>
    )
}

export const MenuLinks = (props: any) => {
    return (<>
        {menuDetails.map((menu) => {
            return <NavHashLink key={menu.menu} style={{ order: menu.order }} className="menuItem" smooth to={menu.to}><div onClick={() => props.handleMobileMenu(false)} className="menuItem">{menu.menu}</div></NavHashLink >
        })}
        {props.children}
    </>
    )
}
