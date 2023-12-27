import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import smallCar1 from "../../assets/images/hero/yellow-mercedez-Small.jpg";
import mediumCar1 from "../../assets/images/hero/yellow-mercedez-Medium.jpg";
import largeCar1 from "../../assets/images/hero/yellow-mercedez-Large.jpg";

import smallCar2 from "../../assets/images/hero/audi-r8-Small.jpg";
import mediumCar2 from "../../assets/images/hero/audi-r8-Medium.jpg";
import largeCar2 from "../../assets/images/hero/audi-r8-Large.jpg";

import smallCar3 from "../../assets/images/hero/nissan-Small.jpg";
import mediumCar3 from "../../assets/images/hero/nissan-Medium.jpg";
import largeCar3 from "../../assets/images/hero/nissan-Large.jpg";

import smallCar4 from "../../assets/images/hero/bmw-Small.jpg";
import mediumCar4 from "../../assets/images/hero/bmw-Medium.jpg";
import largeCar4 from "../../assets/images/hero/bmw-Large.jpg";

const HeroCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={10000}
      showThumbs={false}
      swipeable={true}
      dynamicHeight={false}
      showStatus={false}
    >
      <div className="carousel">
        <img
          className={"carousel-car"}
          srcSet={`
          ${smallCar1} 425w,
          ${mediumCar1} 768w,
          ${largeCar1} 900w,
        `}
          sizes="(max-width: 426px), (max-width: 769px), (min-width: 770px)"
          src={largeCar1}
          alt="yellowMercedezBenz on a road"
        />
      </div>
      <div className="carousel">
        <img
          className={"carousel-car"}
          srcSet={`
            ${smallCar2} 425w,
            ${mediumCar2} 768w,
            ${largeCar2} 900w,
          `}
          sizes="(max-width: 426px), (max-width: 769px), (min-width: 770px)"
          src={largeCar2}
          alt="audiR8 in a traffic"
        />
      </div>
      <div className="carousel">
        <img
          className={"carousel-car"}
          srcSet={`
            ${smallCar3} 425w,
            ${mediumCar3} 768w,
            ${largeCar3} 900w,
          `}
          sizes="(max-width: 426px), (max-width: 769px), (min-width: 770px)"
          src={largeCar3}
          alt="whiteNissan on a road"
        />
      </div>
      <div className="carousel">
        <img
          className={"carousel-car"}
          srcSet={`
            ${smallCar4} 425w,
            ${mediumCar4} 768w,
            ${largeCar4} 900w,
          `}
          sizes="(max-width: 426px), (max-width: 769px), (min-width: 770px)"
          src={largeCar4}
          alt="greyBMW in parking lot"
        />
      </div>
    </Carousel>
  );
};

export default HeroCarousel;
