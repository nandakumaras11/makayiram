import { useNavigate, useParams } from "react-router-dom"
import "./RoomDetails.css"
import { useEffect } from "react"
import { newRoomDetails } from "../../Constents";
import { CheckAvailability } from "../Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaCalendarCheck, FaCalendarTimes, FaRupeeSign, FaUsers } from "react-icons/fa";
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
    photos: string[] //change
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
function SingleRoomDetails(props: SingleRoomDetailsProps) {
  const { name, Categorisation, description, occupancy, Tariff, photos } = props.room;
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
      <div className="roomName">{name}</div>
      {/* <div className="categorisation">{Categorisation}</div> */}
      <div className="description">{description}</div>
      <div className="aminity">
        <div className="aminityItem">
          <div className="icon"> <FaUsers /></div> <div className="text">{`${occupancy} Person`}</div>
        </div>
        <div className="aminityItem">
          <div className="icon"> <FaRupeeSign /></div> <div className="text">{`${Tariff}`}</div>
        </div>
        <div className="aminityItem">
          <div className="icon"> <FaCalendarCheck /></div> <div className="text">Check in : 2:00 PM</div>
        </div>
        <div className="aminityItem">
          <div className="icon"> <FaCalendarTimes /></div> <div className="text">Check out : 11:00 AM</div>
        </div>
        {/* <div className="aminityItem">{Tariff}</div> */}
      </div>
      <div className="checkAvailability">
        <CheckAvailability cls="checkAvailabilityRoomDetails checkAvailabilityInline" />
      </div>

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
  const { rooms, thumbline } = filteredRoomDetails;
  // let subRoomName, subRoomDescription, subRoomImages;
  // const { name: subRoomName, description: subRoomDescription, images: subRoomImages } = filteredSubRoomDetails;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  const navigate = useNavigate();
  return (
    <div className="roomDetailsParent">
      {/* <div className="icon_container" style={{ backgroundImage: `url(${thumbline})` }}></div> */}
      <div className="goBack" onClick={() => navigate(-1)}><FaArrowCircleLeft /> Back</div>
      {rooms.map((room, key) => <SingleRoomDetails room={room} mapkey={room} rowReverse={key % 2 != 0} />)}

      {/* {filteredSubRoomDetails ? <SingleRoomDetails name={filteredSubRoomDetails?.name} description={filteredSubRoomDetails.description} rowReverse={true} images={filteredSubRoomDetails.images} settings={settings} /> : <></>} */}
    </div>
  )
}
