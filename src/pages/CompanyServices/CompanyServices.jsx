import { companyServicesList } from "../../common/data/companyServicesList";

const CompanyServices = () => {
  return (
    <div className="wrapper">
      <div className="company-services__main-container">
        <section className="company-services-description">
          <h2 className="company-services-title">Paslaugos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur debitis doloribus nobis nesciunt aliquid eum! Molestias,
            dolor exercitationem voluptate minima molestiae reiciendis placeat
            voluptatem. Architecto id culpa eaque facilis earum?
          </p>
        </section>
        <div className="company-services-container">
          {companyServicesList.map((service) => {
            return (
              <div
                className="company-services__service-box"
                key={service.label}
              >
                <div className="company-services__service-header">
                  <div className="company-services__icon-box">
                    <img
                      className="company-services__icon"
                      src={service.image}
                      alt={service.label}
                    />
                  </div>
                  <h3 className="company-services__label">{service.label}</h3>
                </div>
                <p className="company-services__service-description">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;
