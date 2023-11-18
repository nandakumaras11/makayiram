import "./Home.css"
import "./HomeMobile.css"
import { treakingImg } from "../../Images"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaEnvelope, FaPhoneAlt, FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { aboutHomePageContent, newRoomDetails } from "../../Constents";
import { useNavigate } from 'react-router-dom'
import { SliderSimple } from "../../Components/Slider/Slider";
type CheckAvailabilityProps = {
    cls?: String
}
function formatDate(dateObj: Date) {
    return dateObj.toLocaleDateString("en-GB", { // you can use undefined as first argument
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    })
    // return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`
}
export function CheckAvailability({ cls = "" }: CheckAvailabilityProps) {
    const [startDate, setStartDate] = useState(new Date());
    // const [adult, setAdult] = useState(1)
    // const adultRef = useRef(1);
    // const adultRef = useRef<HTMLInputElement>();

    const tomorrow = new Date(startDate);
    tomorrow.setDate(startDate.getDate() + 1)
    const [endDate, setEndDate] = useState(tomorrow);
    const handleStartDate = (date: Date) => {
        setStartDate(date);
        if (endDate.getTime() <= date.getTime()) {
            const newEndDate = new Date(date);
            newEndDate.setDate(date.getDate() + 1);
            setEndDate(newEndDate);
        }

    }
    const getMonthName = (date: Date) => {
        return date.toLocaleString("default", { month: "long" });
    }
    return (<section className={`checkAvailabilityContainer ${cls}`}>
        <form name="resBooking" className="form" id="resBooking" action="https://bookings.resavenue.com/resBooking4/searchRooms"
            method="POST" target="_blank">
            <div className="box">
                <div className="checkIn">
                    <div className="text">Check -in</div>
                    <div className="value"> <div className="date">{startDate.getDate()}</div>
                        <div className="month">{getMonthName(startDate)}</div>
                        <input type="hidden" name="curr" value="INR" />
                        <input type="hidden" name="regCode" value="VXIA1026" />
                        <DatePicker customInput={<FaAngleDown className="datepickerOpener" />} minDate={new Date()} selected={startDate} onChange={(date: any) => handleStartDate(date)} />
                        {/* 03/11/2023 */}
                        {/* <input type="text" id="arr_date" name="arr_date" value={startDate.getDate() + "/" + startDate.getMonth() + "/" + startDate.getFullYear()} /> */}
                        <input type="hidden" id="arr_date" name="arr_date" placeholder="Check-In" className="calender" value={formatDate(startDate)} autoComplete="off" />
                        <input type="hidden" id="dep_date" name="dep_date" placeholder="Check-Out"
                            className="calender" value={formatDate(endDate)} autoComplete="off" />
                    </div>
                </div>
                <div className="checkOut">
                    <div className="text">Check-Out</div>
                    <div className="value"> <div className="date">{endDate.getDate()}</div>
                        <div className="month">{getMonthName(endDate)}</div>
                        <DatePicker name="dep_date" customInput={<FaAngleDown className="datepickerOpener" />} minDate={tomorrow} selected={endDate} onChange={(date: any) => setEndDate(date)} />
                        {/* <input type="text" id="dep_date" name="dep_date" value={endDate.getDate() + "/" + endDate.getMonth() + "/" + endDate.getFullYear()} /> */}
                    </div>
                </div>
                {/* <div className="adult">
                    <div className="text">Adult</div>
                    <input className="value" value={adult} type="number" onChange={(event: any) => setAdult(event.target.value)} min={1} max={10} name="" id="" />
                </div> */}
                <div className="checkAvailability">
                    {/* <a className="whatsappLink" href={`whatsapp://send?text=I need a stay from ${startDate.getDate()} - ${startDate.getMonth()}- ${startDate.getFullYear()}  to  ${endDate.getDate()} - ${endDate.getMonth()}- ${endDate.getFullYear()} for ${adult}  adults .&phone="${import.meta.env.VITE_MOBILE}"`}> */}
                    <button className="checkAvailabilityBtn">BOOK NOW</button>
                    {/* </a> */}
                </div>
            </div>
        </form>
    </section>);
}



function Rooms() {
    const navigate = useNavigate();
    return (<div className="roomsContainer" id="rooms">
        {newRoomDetails.map(room => {
            return <div className="room" style={{
                backgroundImage: `url(${room.thumbline})`
            }} key={room.category} onClick={() => {
                navigate(`/RoomDetails/${room.category}`, {
                    state: {}
                });
            }}>
                {
                    /* to={`/RoomDetails:${room.name}`}> */
                }
                {
                    /* <div className="roomName">{room.category}</div> */
                }
            </div>;
        })}

    </div>);
}


export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <SliderSimple />
            {/* <CheckAvailability cls="mobileCheckAvailability checkAvailabilityInline" /> */}
            <section className="experiencesContainer" id="activities">
                <div className="left">
                    {/* <div className="head">About US</div> */}
                    {/* <div className="head">Who We Are</div> */}
                    <div className="description">{aboutHomePageContent}</div>
                    <div className="aboutMoreBtn" onClick={() => navigate("/About")}>More</div>
                </div>
                <div className="right" style={{ backgroundImage: `url(${treakingImg})` }}>

                </div>
            </section>
            <Rooms />

            <section className="testimonialContainer">
                <div className="head">Guest's Expressions</div>
                <div className="testimonialSliderContainer">
                    <div className="testimonial">
                        <FaQuoteLeft />  Hi,
                        Makayiram Retreat was a treat for the senses. The cool air, the hot scenery,
                        the overwhelming ambience, the opulent cuisine; everything was pitch-
                        perfect. The verdant cardamom plantation was truly breath-taking and the
                        trail walk proved to be a refreshing experience. Highly recommended if you
                        are looking for a rejuvenating weekend stay.
                        Regards <FaQuoteRight />
                    </div>
                    <div className="auther">Vishnu</div>
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
                        <div className="line"> Periyachola, Pothamedu,</div>
                        <div className="line">Munnar - 685612</div>
                        {/* <div className="line">reservation@makayiram.com</div> */}

                        <div className="line" style={{ display: "flex", placeItems: "center", gap: "2%" }}><FaPhoneAlt /> +91 85909 87080</div>
                    </div>
                    <div className="address mt dotedLine">
                        <div className="line mt">Registered Office:</div>
                        <div className="line">6th Floor, Metro Plaza,</div>
                        <div className="line">Market Road, Kochi, Kerala – 682 014.</div>
                        <div className="line" style={{ display: "flex", placeItems: "center", gap: "2%" }}><FaEnvelope />reservations@makayiram.com</div>

                        {/* <div className="line">+91 9895454152</div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
