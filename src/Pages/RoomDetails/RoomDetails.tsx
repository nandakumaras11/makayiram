import { useNavigate, useParams } from "react-router-dom"
import "./RoomDetails.css"
import { useEffect, useState } from "react"
import { newRoomDetails } from "../../Constents";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowDown, FaArrowUp } from "react-icons/fa";
type SingleRoomDetailsProps = {
  // images: string[]
  // settings: any,
  // name: string,
  // description: string,
  rowReverse?: boolean,
  mapkey: any,
  room: {
    name: string,
    Categorisation: string,
    description: string,
    occupancy: number,
    Tariff: string,
    photos: string[],
    icon: string,
    detailedDescription: string
  }
}
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  dotsClass: "slick-dots slick-thumb",
};

// function Aminity(props) {
//   return (<div className="aminity">
//     <div className="aminityItem">
//       <div className="icon"> <FaUsers /></div> <div className="text">{`${props.occupancy} pax`}</div>
//     </div>
//     <div className="aminityItem">
//       <div className="icon"> <FaCalendarCheck /></div> <div className="text">Check in : 2:00 PM</div>
//     </div>
//     <div className="aminityItem">
//       <div className="icon"> <FaCalendarTimes /></div> <div className="text">Check out : 11:00 AM</div>
//     </div>
//     <div className="aminityItem">
//       <div className="icon"> <FaRupeeSign /></div> <div className="text">{`${props.Tariff}`}</div>
//     </div>
//   </div>);
// }


function SingleRoomDetails(props: SingleRoomDetailsProps) {
  const { name, description, photos, icon, Categorisation, detailedDescription } = props.room;
  const [isPolicyHidden, togglePolicy] = useState(false);
  return (<div key={props.mapkey} className={props.rowReverse ? "roomDetailsContainer rowReverse" : "roomDetailsContainer"}>
    <div className="imageGallery">
      <Slider {...settings}>
        {photos.map(image => {
          return <div key={image}>
            <div className="galleryItem" style={{
              backgroundImage: `url(${image})`
            }}></div>
          </div>;
        })}
      </Slider>
    </div>
    <div className="roomDetails">

      <div className="roomName"> {name}<div className="roomIcon"><img src={icon} height={75} width={75} /></div></div>
      <div className="description">{description}</div>
      <div className="categorisation">{Categorisation} ✨</div>
      {/* <Aminity occupancy={occupancy} Tariff={Tariff}></Aminity> */}
      <div className="checkAvailability">
        <div className="checkAvailabilityRoomDetails checkAvailabilityInline">  {detailedDescription}</div>

        {/* <CheckAvailability cls="checkAvailabilityRoomDetails checkAvailabilityInline" /> */}
      </div>
      <div className="bathroom">All rooms have en-suite facilities including bathrooms.</div>
      <div className="cancellation" onClick={() => togglePolicy((previous) => !previous)}><div>Cancellation Policy</div><div className="icon">{!isPolicyHidden ? <FaArrowDown /> : <FaArrowUp />}</div> </div>
      <ul className={!isPolicyHidden ? "list" : "hidden list"}>
        <li>   15 days prior to the arrival date – Full amount refund</li>
        <li> 72 hrs prior to the arrival date – Refund of 50 % of the booking
          amount</li>
        <li> 48 Hrs prior to the arrival date – Refund of 25 % of the booking
          amount</li>
        <li> Less than 48 hrs prior to the arrival date – No amount refund</li>
      </ul>
    </div>

  </div>);
}


export const RoomDetails = () => {
  const { roomCategory } = useParams();
  const filteredRoomDetails = newRoomDetails.filter(room => room.category == roomCategory)[0];
  // const filteredSubRoomDetails = subRoomDetails.filter(room => room.key == roomName)[0];
  // const filteredRoomDetails = roomDetails.filter(room => room.name == roomName)[0];
  // const filteredSubRoomDetails = subRoomDetails.filter(room => room.key == roomName)[0];
  console.log(filteredRoomDetails);
  const { rooms } = filteredRoomDetails;
  // let subRoomName, subRoomDescription, subRoomImages;
  // const { name: subRoomName, description: subRoomDescription, images: subRoomImages } = filteredSubRoomDetails;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  const navigate = useNavigate();
  return (
    <>
      <div className="goBack" onClick={() => navigate(-1)}><FaArrowCircleLeft /> </div>
      <div className="roomDetailsParent">
        {/* <div className="icon_container" style={{ backgroundImage: `url(${thumbline})` }}></div> */}
        {rooms.map((room, key) => <SingleRoomDetails room={room} mapkey={room} rowReverse={key % 2 != 0} />)}

        {/* {filteredSubRoomDetails ? <SingleRoomDetails name={filteredSubRoomDetails?.name} description={filteredSubRoomDetails.description} rowReverse={true} images={filteredSubRoomDetails.images} settings={settings} /> : <></>} */}
      </div>
    </>
  )
}
