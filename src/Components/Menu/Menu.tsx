import { menuDetails } from "../../Constents"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { logo } from "../../Images"
import "./Menu.css"
export const Menu = () => {
    return (
        <>
            <div className="menuContainer desktopOnly">
                <div className="menuItem about">ABOUT</div>
                <div className="menuItem rooms">ROOMS</div>
                <div className="menuItem activities">ACTIVITIES</div>
                <div className="menuItem logo" style={{ backgroundImage: `url(${logo})` }}></div>
                <div className="menuItem ratesreservation">RATES & RESERVATION</div>
                <div className="menuItem contact">CONTACT</div>
                <div className="menuItem socialmedia"><SocialMediaMenu /></div>
                {/* {menuDetails.map((menuItem) => {
                    return <div key={menuItem.menu} className="menuItem">{menuItem.menu}</div>
                })} */}
            </div>
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
