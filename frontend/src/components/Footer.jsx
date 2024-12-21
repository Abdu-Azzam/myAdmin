import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./foot.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="imageContainer">
        <img className="logo" alt="" src="/assets/images/navlogo.png" />
        <b className="rentContainer">
          <p className="text-footer">Sewa Kendaraan Listrik</p>
          <p className="text-footer">Cukup dari Rumah Bersama</p>
          <p className="text-footer">VELOZ BICYCLE</p>
        </b>
        <b className="pollutionFree">#JalanTanpaPolusi</b>
      </div>
      <div className="infoContainer">
        <div className="infoText">Info Selengkapnya</div>
        <div className="linkContainer">
          <div className="info">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+6281256789101" className="text">
              {" "}
              +62 812 5678 9101{" "}
            </a>
          </div>
          <div className="info">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:velozbicycle@gmail.com" className="text">
              {" "}
              velozbicycle@gmail.com{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
