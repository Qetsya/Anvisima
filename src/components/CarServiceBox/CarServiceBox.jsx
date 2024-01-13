const CarServiceBox = ({service}) => {
  return (
    <ul className="service-box" key={service.label}>
      <li className="service-icon-box">
        <img className="service-icon" src={service.image} alt={service.label} />
      </li>
      <h3 className="service-title">{service.label}</h3>
    </ul>
  );
};

export default CarServiceBox;
