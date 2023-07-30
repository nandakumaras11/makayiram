import { aboutMakayiram } from "../../Constents"
import { aboutBg, bannerBg, geminiThumb } from "../../Images"
import "./About.css"
export const About = () => {
    return (<>
        <div className="aboutUsBanner" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="head">About Makayiram</div>

            <div className="taglin">
                “Life is either a daring adventure or nothing at all.”
            </div>
        </div>
        <div className="aboutContainer" >
            <div className="aboutContent">
                <div className="description">{aboutMakayiram}</div>
            </div>
            {/* <div className="videoThumb" style={{ backgroundImage: `url(${geminiThumb})` }}></div> */}
        </div>
    </>
    )
}
