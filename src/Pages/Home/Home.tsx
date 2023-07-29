import "./Home.css"
import "./HomeMobile.css"
import { bannerBg, roomImages, treakingImg } from "../../Images"
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
type CheckAvailabilityProps = {
    cls: String
}
function CheckAvailability({ cls = "" }: CheckAvailabilityProps) {
    const [startDate, setStartDate] = useState(new Date());
    const tomorrow = new Date(startDate);
    tomorrow.setDate(startDate.getDate() + 1)
    const [endDate, setEndDate] = useState(tomorrow);
    const startDateRef = useRef(null);
    const getMonthName = (date: Date) => {
        return date.toLocaleString("default", { month: "long" });
    }
    return (<section className={`checkAvailabilityContainer ${cls}`}>
        <div className="box">
            <div className="checkIn">
                <div className="text">Check -in</div>
                <div className="value"> <div className="date">{startDate.getDate()}</div>
                    <div className="month">{getMonthName(startDate)}</div>
                    <DatePicker customInput={<FaAngleDown className="datepickerOpener" />} ref={startDateRef} minDate={new Date()} selected={startDate} onChange={(date: any) => setStartDate(date)} /></div>
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
                <input className="value" type="number" defaultValue={1} min={1} max={10} name="" id="" />
            </div>
            <div className="checkAvailability">
                <div className="checkAvailabilityBtn">Check Availability</div>
            </div>
        </div>
    </section>);
}


export const Home = () => {

    return (
        <>
            <div className="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
                <div className="bannerText">
                    <div className="tagLine">Harmony With Nature</div>
                    <div className="subTagline">Makayiram plantation retreat</div>
                </div>
                .
                <CheckAvailability cls="desktopOnly" />
            </div>
            <CheckAvailability cls="mobileOnly" />
            <div className="roomsContainer">
                {roomImages.map((room) => {
                    return <div style={{ backgroundImage: `url(${room})` }} className="room"></div>
                })}

            </div>
            <section className="experiencesContainer">
                <div className="left">
                    <div className="head">The Experience</div>
                    <div className="discription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod sodales odio in imperdiet. Integer tincidunt luctus eros vitae maximus. Nulla a erat erat. Fusce ac enim tortor. Nunc in leo porta risus placerat malesuada quis a felis. Nulla scelerisque sem nec pretium tempus. Nam scelerisque nec sem eget tincidunt. Aenean elementum, lacus eget aliquet condimentum, mauris leo eleifend lectus, sit amet eleifend enim risus in diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt lacus lectus. In vel hendrerit tellus, non aliquam lacus. Proin enim sapien, vulputate ac cursus id, convallis nec urna. Aenean accumsan ipsum at purus congue, et vestibulum leo scelerisque.</div>
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
            <section className="contactContainer">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.448943775506!2d76.86729157458133!3d8.552754896262801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be59c2094897%3A0x2f6dc580d44a297d!2sSamariyas!5e0!3m2!1sen!2sin!4v1690549807934!5m2!1sen!2sin" className="iframeMap" width="100%" height={500} style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="address">
                    <div className="line">Makayiram Retreat</div>
                    <div className="line">PB NO 40, Munnar - Bison Valley Road</div>
                    <div className="line">Pothamedu, Munnar, kerala 685612</div>
                    <div className="line">reservation@makayiram.com</div>

                    <div className="line">+91 9895454152</div>
                </div>
            </section>

        </>
    )
}
