import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import carImage1 from "../../assets/images/yellow-mercedez.jpg";
import carImage2 from "../../assets/images/audi-r8.jpg";
import carImage3 from "../../assets/images/nissan.jpg";
import carImage4 from "../../assets/images/bmw.jpg";

const HeroCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={10000}
      showThumbs={false}
      swipeable={true}
    >
      <div className="carousel">
        <img
          className={"carousel-car"}
          src={carImage1}
          alt="yellowMercedezBenz"
        />
      </div>
      <div className="carousel">
        <img className={"carousel-car"} src={carImage2} alt="audiR8" />
      </div>
      <div className="carousel">
        <img className={"carousel-car"} src={carImage3} alt="whiteNissan" />
      </div>
      <div className="carousel">
        <img className={"carousel-car"} src={carImage4} alt="greyBMW" />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
