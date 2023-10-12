import { useParams } from "react-router-dom"
import "./RoomDetails.css"
import { roomDetails, subRoomDetails } from "../../Constents";
import { CheckAvailability } from "../Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
type SingleRoomDetailsProps = {
  images: string[]
  settings: any,
  name: string,
  description: string,
  rowReverse?: boolean
}
function SingleRoomDetails(props: SingleRoomDetailsProps) {
  return (<div className={props.rowReverse ? "roomDetailsContainer rowReverse" : "roomDetailsContainer"}>
    <div className="imageGallery">
      <Slider {...props.settings}>
        {props.images.map(image => {
          return <div>
            <div className="galleryItem" style={{
              backgroundImage: `url(${image})`
            }}></div>
          </div>;
        })}
      </Slider>
    </div>
    <div className="roomDetails">
      <div className="roomName">{props.name}</div>
      <div className="description">{props.description}</div>
      <div className="checkAvailability">
        <CheckAvailability cls="checkAvailabilityRoomDetails checkAvailabilityInline" />
      </div>

    </div>
  </div>);
}


export const RoomDetails = () => {
  const { roomName } = useParams();
  const filteredRoomDetails = roomDetails.filter(room => room.name == roomName)[0];
  const filteredSubRoomDetails = subRoomDetails.filter(room => room.key == roomName)[0];
  console.log(filteredRoomDetails);
  const { name, description, images } = filteredRoomDetails;
  // let subRoomName, subRoomDescription, subRoomImages;
  // const { name: subRoomName, description: subRoomDescription, images: subRoomImages } = filteredSubRoomDetails;
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
    <>
      <SingleRoomDetails name={name} description={description} images={images} settings={settings} />
      {filteredSubRoomDetails ? <SingleRoomDetails name={filteredSubRoomDetails?.name} description={filteredSubRoomDetails.description} rowReverse={true} images={filteredSubRoomDetails.images} settings={settings} /> : <></>}
    </>
  )
}
