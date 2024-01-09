import { contacts } from "../../assets/data/contacts";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const libraries = ["places"];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 54.65085332064388,
  lng: 25.301532334403465,
};

const Contacts = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
      <div className="contacts-hero">
        <h2 className="contacts-hero-text">kontaktai</h2>
      </div>
      <div className="wrapper">
        <div className="contacts-container">
          <div className="contacts-map">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>

          <div className="contacts-content">
            <h3>Susisiekite!</h3>
            <h4>Darbo laikas:</h4>
            <span className="contacts-content-text">
              {contacts.workingHours}
            </span>
            <span className="contacts-content-text">
              {contacts.workingHoursWeekends}
            </span>
            <h4>
              Adresas:{" "}
              <span className="contacts-content-text">{contacts.adress}</span>
            </h4>
            <h4>
              Tel. nr:{" "}
              <span className="contacts-content-text">
                {contacts.phoneNumber}
              </span>
            </h4>
            <h4>
              El. paštas:{" "}
              <span className="contacts-content-text">{contacts.email}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
