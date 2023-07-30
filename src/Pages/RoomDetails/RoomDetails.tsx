import { useParams } from "react-router-dom"
import "./RoomDetails.css"
import { roomDetails } from "../../Constents";
import { CheckAvailability } from "../Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const RoomDetails = () => {
  const { roomName } = useParams();
  const filteredRoomDetails = roomDetails.filter(room => room.name == roomName)[0];
  console.log(filteredRoomDetails);
  const { thumbline, name, description, images } = filteredRoomDetails;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <div className="roomDetailsContainer">
      <div className="imageGallery" >

        <Slider {...settings}>
          {images.map((image) => {
            return <div >
              <div className="galleryItem" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
          })}
        </Slider>
      </div>
      <div className="roomDetails">
        <div className="roomName">{name}</div>
        <div className="description">{description}</div>
        <div className="checkAvailability">
          <CheckAvailability cls="checkAvailabilityRoomDetails checkAvailabilityInline" />
          </div>
          
      </div>
    </div>
  )
}
