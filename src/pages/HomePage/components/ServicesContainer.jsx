import services from "../utils/services";
import CarServiceBox from "../../../components/CarServiceBox/CarServiceBox";

const ServicesContainer = () => {
  return (
    <div className="wrapper">
      <div className="service">
        {services.map((service) => {
          return (
            <CarServiceBox service={service} key={service.label}/>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContainer;
