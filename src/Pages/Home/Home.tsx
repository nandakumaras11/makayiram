import "./Home.css"
import "./HomeMobile.css"
import { bannerBg, logo, treakingImg } from "../../Images"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { aboutHomePageContent, roomDetails } from "../../Constents";
import { useNavigate } from 'react-router-dom'
type CheckAvailabilityProps = {
    cls?: String
}
export function CheckAvailability({ cls = "" }: CheckAvailabilityProps) {
    const [startDate, setStartDate] = useState(new Date());
    const [adult, setAdult] = useState(1)
    // const adultRef = useRef(1);
    // const adultRef = useRef<HTMLInputElement>();
    const tomorrow = new Date(startDate);
    tomorrow.setDate(startDate.getDate() + 1)
    const [endDate, setEndDate] = useState(tomorrow);
    const getMonthName = (date: Date) => {
        return date.toLocaleString("default", { month: "long" });
    }
    return (<section className={`checkAvailabilityContainer ${cls}`}>
        <div className="box">
            <div className="checkIn">
                <div className="text">Check -in</div>
                <div className="value"> <div className="date">{startDate.getDate()}</div>
                    <div className="month">{getMonthName(startDate)}</div>
                    <DatePicker customInput={<FaAngleDown className="datepickerOpener" />} minDate={new Date()} selected={startDate} onChange={(date: any) => setStartDate(date)} /></div>
            </div>
            <div className="checkOut">
                <div className="text">Check-Out</div>
                <div className="value"> <div className="date">{endDate.getDate()}</div>
                    <div className="month">{getMonthName(endDate)}</div>
                    <DatePicker customInput={<FaAngleDown className="datepickerOpener" />} minDate={tomorrow} selected={endDate} onChange={(date: any) => setEndDate(date)} />
                </div>
            </div>
            <div className="adult">
                <div className="text">Adult</div>
                <input className="value" value={adult} type="number" onChange={(event: any) => setAdult(event.target.value)} min={1} max={10} name="" id="" />
            </div>
            <div className="checkAvailability">
                <a className="whatsappLink" href={`whatsapp://send?text=I need a stay from ${startDate.getDay} to ${endDate} for ${adult} adults .&phone="${import.meta.env.VITE_MOBILE}"`}>
                    <div className="checkAvailabilityBtn">Check Availability</div>
                </a>
            </div>
        </div>

    </section>);
}


export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <div className="bannerText">
                    <div className="logo mobileOnly" style={{ backgroundImage: `url(${logo})` }}></div>
                    <div className="tagLine">Harmony With Nature</div>
                    <div className="subTagline">Makayiram plantation retreat</div>
                </div>
                <CheckAvailability cls="desktopOnly" />
            </div>
            <CheckAvailability cls="mobileCheckAvailability checkAvailabilityInline" />
            <div className="roomsContainer" id="rooms" >
                {roomDetails.map((room) => {
                    return <div className="room" style={{ backgroundImage: `url(${room.thumbline})` }} key={room.name}
                        onClick={() => { navigate(`/RoomDetails/${room.name}`) }}>
                        {/* to={`/RoomDetails:${room.name}`}> */}
                        <div className="roomName">{room.name}</div>
                    </div>
                })}

            </div>
            <section className="experiencesContainer" id="activities">
                <div className="left">
                    <div className="head">About US</div>
                    {/* <div className="head">Who We Are</div> */}
                    <div className="description">{aboutHomePageContent}</div>
                </div>
                <div className="right" style={{ backgroundImage: `url(${treakingImg})` }}>

                </div>
            </section>
            <section className="testimonialContainer">
                <div className="head">Guest's Expressions</div>
                <div className="testimonialSliderContainer">
                    <div className="testimonial">
                        <FaQuoteLeft />   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod sodales odio in imperdiet. Integer tincidunt luctus eros vitae maximus. Nulla a erat erat. Fusce ac enim tortor. Nunc in leo porta risus placerat malesuada quis a felis.  <FaQuoteRight />
                    </div>
                    <div className="auther">Artin</div>
                    <div className="rating"><FaStar /><FaStar /><FaStar /> <FaStar /><FaStar /></div>
                </div>
            </section>

            <section className="contactContainer" id="contact">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3928.6769249727154!2d77.07627487503173!3d10.043496090064146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAyJzM2LjYiTiA3N8KwMDQnNDMuOSJF!5e0!3m2!1sen!2sin!4v1691722210425!5m2!1sen!2sin" className="iframeMap" width="100%" height={500} style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="addresses">
                    <div className="address">
                        <div className="line">Makayiram Retreat</div>
                        <div className="line">PB NO 40, Munnar - Bison Valley Road</div>
                        <div className="line">Pothamedu, Munnar, kerala 685612</div>
                        <div className="line">reservation@makayiram.com</div>

                        <div className="line">+91 9895454152</div>
                    </div>
                    <div className="address mt dotedLine">
                        <div className="line mt">Registered Office</div>
                        <div className="line">6th Floor</div>
                        <div className="line">Metro Plaza Market Road Ernakulam </div>
                        <div className="line">Kochi India 682014</div>

                        {/* <div className="line">+91 9895454152</div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
