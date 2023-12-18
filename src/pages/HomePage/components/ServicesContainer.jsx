import services from "../utils/services";

const ServicesContainer = () => {
    return (
        <div className="wrapper">
        <div className="service">
          {services.map((service) => {
            return (
              <div className="service-box" key={service.label}>
                <div className="service-icon-box">
                  <img
                    className="service-icon"
                    src={service.image}
                    alt={service.label}
                  />
                </div>
                <h3 className="service-title">{service.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    )
};

export default ServicesContainer;