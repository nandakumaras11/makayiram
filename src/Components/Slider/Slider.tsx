import "./Slider.css"
import slider1 from "../../assets/Slider/slider1.jpg"
import slider2 from "../../assets/Slider/slider2.jpg"
import slider3 from "../../assets/Slider/slider3.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// import { useTranslation } from "react-i18next";

export const SliderSimple = () => {
    // const { t } = useTranslation();
    const slider = [
        {
            sliderText1: "THE TRAIL OF HAPPINESS",
            // sliderText2: "Slider1Text2",
            // sliderText3: "Slider1Text3",
            productImage: slider1
        },
        {
            sliderText1: "THE LIGHT OF TRANQUILITY",
            // sliderText2: "SliderText22",
            // sliderText3: "SliderText23",
            productImage: slider2
        },
        {
            sliderText1: "THE TASTE OF REJUVENATION",
            // sliderText2: "SliderText32",
            // sliderText3: "SliderText33",
            productImage: slider3
        }
    ]
    var settings = {
        autoplay: true,
        dots: true,
        dotsClass: "slick-dots sliderDot",
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 989,
                settings: {
                    // centerMode: true,
                    // slidesToShow: 1,
                    // variableWidth: false,
                    // infinite: false,
                    dots: false,
                    vertical: false,
                    verticalSwiping: false,
                    arrows: false

                }
            }]
    };

    return (
        <>
            <Slider {...settings}>
                {slider.map((slide, index) => {
                    return <div> <div key={index} className="sliderContainer" style={{ backgroundImage: `url(${slide.productImage})` }} >

                        <div className="center_text">
                            <div className="tagLine">      {slide.sliderText1}</div>
                            <div className="subTagline">
                                MAKAYIRAM PLANTATION RETREAT
                            </div>

                        </div>
                    </div></div>
                })}
            </Slider>
        </>
        // <Slider {...settings}>
        //     {slider.map((slide, index) => {
        //         return <div key={index} className={`bannerContainer`}>
        //             <div className="sliderContainer" >
        //                 <motion.div
        //                     initial="start"
        //                     whileInView="end"
        //                     viewport={{ once: false }}
        //                     transition={{ duration: 0.6 }}
        //                     variants={{
        //                         start: { translateY: -100 },
        //                         end: { translateY: 0 }
        //                     }}
        //                     className="productImage" data-aos="slide-down" style={{ backgroundImage: `url(${slide.productImage})` }}
        //                 ></motion.div>
        //             </div></div>
        //     })}

        // </Slider>

    )
}
