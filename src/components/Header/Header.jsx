import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";
import routes from "../constants/routes";
import anvisimaLogo from "../../assets/images/small-logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="wrapper">
            <span className="header-top-title">Mus rasite Vilniuje!</span>
          </div>
        </div>
        <div className="header-body">
          <div className="wrapper">
            <div className="header-body-content">
              <div className="header-body-container">
                <NavLink to={routes.homePage}>
                  <img
                    className="header-body-logo"
                    src={anvisimaLogo}
                    alt="anvisimaLogo"
                  />
                </NavLink>
              </div>
              <span className="header-body-contacts">
                Mūsų adresas:<br></br> Liepkalnio g. 83a
              </span>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
