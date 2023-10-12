import { MenuLinks, SocialMediaMenu } from "../Menu/Menu";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="column1">
        <div className="mainHead">Follow Us</div>

        <div className="subHeading"><SocialMediaMenu /></div>

      </div>
      <div className="column2">
        <div className="mainHead">Quick Links</div>
        <MenuLinks />
        {/* <div className="mainHead">About Us</div>
        <div className="subHeading">Activities</div>
        <div className="subHeading">Rooms</div>
        <div className="subHeading">Contact Us</div>
        <div className="subHeading">Feedbacks</div> */}
      </div>
      <div className="column3">
        <div className="mainHead">TRIP ADVISOR</div>
      </div>
    </div>
  )
}
