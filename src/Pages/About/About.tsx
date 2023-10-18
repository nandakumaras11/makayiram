import { useEffect } from "react"
import { aboutMakayiram } from "../../Constents"
import { aboutbanner } from "../../Images"
import "./About.css"
type BannerProps = {
    image: string,
    head: string,
    tagline: string
}
export function Banner({ image, head, tagline }: BannerProps) {
    return (<div className="aboutUsBanner" style={{
        backgroundImage: `url(${image})`
    }}>
        <div className="head">{head}</div>

        <div className="taglin">
            {tagline}
        </div>
    </div>);
}


export const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (<>
        <Banner head="About Makayiram" image={aboutbanner} tagline="Life is either a daring adventure or nothing at all." />
        <div className="aboutContainer" >
            <div className="aboutContent">
                <div className="description">{aboutMakayiram}</div>
            </div>
            {/* <div className="videoThumb" style={{ backgroundImage: `url(${geminiThumb})` }}></div> */}
        </div>
    </>
    )
}
