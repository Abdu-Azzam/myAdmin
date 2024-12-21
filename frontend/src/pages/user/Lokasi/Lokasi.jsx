import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./lok.css";

const Lokasi = () => {
  const locations = [
    {
      name: "Institut Teknologi Sepuluh November",
      url: "https://www.google.com/maps/place/Institut+Teknologi+Sepuluh+Nopember/@-7.2823507,112.7923504,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa1323221a93:0x306c3c99adedb258!8m2!3d-7.282356!4d112.7949253!16zL20vMDRndng5?hl=id&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "Universitas Airlangga",
      url: "https://www.google.com/maps/place/Universitas+Airlangga+-+Kampus+MERR+C/@-7.2687109,112.7816647,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fa21a3515291:0x3edf1522ff735924!8m2!3d-7.2687162!4d112.7842396!16s%2Fg%2F11cpfg99rn?hl=id&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      name: "Universitas Negeri Surabaya",
      url: "https://www.google.com/maps/place/Universitas+Negeri+Surabaya+-+Kampus+2/@-7.3008605,112.6700946,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb7a806b1ce1:0x571f4546e898d79a!8m2!3d-7.3008658!4d112.6726695!16s%2Fg%2F11c0vljdw_?hl=id&entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="main-container" id="lokasi">
      <h1 className="title">Lokasi</h1>
      <div className="map-image">
        <img alt="Map" src="/assets/images/loc.png" />
      </div>
      <div className="click">
        {locations.map((location, index) => (
          <div key={index} onClick={() => openLink(location.url)} className="location-item">
            <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} size="s" />
            <span className="location-name">{location.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lokasi;
