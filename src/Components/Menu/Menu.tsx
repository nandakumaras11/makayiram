import { menuDetails } from "../../Constents"
import { FaBars, FaCross, FaFacebookSquare, FaInstagram, FaTimes, FaWindowClose, FaYoutube } from "react-icons/fa"
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
            <div className={isMobileMenuOpen?"menuContainer mobilemenu translateZero":"menuContainer mobilemenu"}>
                <div className="mobileMenuClose mobileOnly"  onClick={() => handleMobileMenu(false)}><FaTimes/></div>
                <div className="menuItem about" onClick={() => { navigate("/") }}>HOME</div>
                <div className="menuItem about" onClick={() => { navigate("/About") }}>ABOUT</div>
                <NavHashLink smooth to="/#rooms">  <div className="menuItem rooms" onClick={() => { navigate("/#rooms") }}>ROOMS</div></NavHashLink>
                <div className="menuItem logo desktopOnly" onClick={() => { navigate("/") }} style={{ backgroundImage: `url(${logo})` }}></div>
                <NavHashLink smooth to="/#activities"><div className="menuItem activities" >ACTIVITIES</div></NavHashLink>
                {/* <div className="menuItem ratesreservation" onClick={() => { navigate("/rates") }}>RATES & RESERVATION</div> */}
                <NavHashLink smooth to="/#contact">  <div className="menuItem contact" >CONTACT</div></NavHashLink>
                <div className="menuItem socialmedia ratesreservation"><SocialMediaMenu /></div>
            </div>
            <div className="mobileMenuOpener mobileOnly" onClick={() => handleMobileMenu(true)}><FaBars /></div>
        </>
    )
}

export const SocialMediaMenu = () => {
    return (
        <div className="socialMediaContainer">
            <div className="faceBook"><FaFacebookSquare /></div>
            <div className="faceBook"><FaInstagram /></div>
            <div className="faceBook"><FaYoutube /></div>
        </div>
    )
}
