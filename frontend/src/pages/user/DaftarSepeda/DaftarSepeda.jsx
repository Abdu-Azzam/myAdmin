import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./dase.css";

const DaftarSepeda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRentClick = (bike) => {
    localStorage.setItem("selectedBike", JSON.stringify(bike));
    navigate("/user/sewa");
  };

  const bikes = [
    {
      brand: "United Bike",
      model: "UNITED Salvador 2.0",
      maxLoad: "120 kg",
      motorPower: "600 watt",
      range: "Up to 60 km",
      maxSpeed: "25 km/h",
      imgSrc: "/assets/images/United Bike - UNITED Salvador 2.0.png",
    },
    {
      brand: "Pacific Bike",
      model: "EXOTIC Sepeda Listrik | X 630",
      maxLoad: "150 kg",
      motorPower: "500 watt",
      range: "Up to 40 km",
      maxSpeed: "40 km/h",
      imgSrc: "/assets/images/Pasific Bike - EXOTIC Sepeda Listrik X-630.png",
    },
    {
      brand: "Uwinfly",
      model: "Uwinfly D60",
      maxLoad: "150 kg",
      motorPower: "450 watt",
      range: "Up to 45 km",
      maxSpeed: "33 km/h",
      imgSrc: "/assets/images/Uwinfly - Uwinfly D60.png",
    },
    {
      brand: "Pacific Bike",
      model: "Pacific VENTURA R5",
      maxLoad: "150 kg",
      motorPower: "550 watt",
      range: "Up to 60 km",
      maxSpeed: "40 km/h",
      imgSrc: "/assets/images/Pasific Bike - Pasific VENTURA R5.png",
    },
    {
      brand: "Uwinfly",
      model: "Uwinfly D7D",
      maxLoad: "150 kg",
      motorPower: "450 watt",
      range: "Up to 40 km",
      maxSpeed: "33 km/h",
      imgSrc: "/assets/images/Uwinfly - Uwinfly D7D.png",
    },
    {
      brand: "GODA",
      model: "GODA ANGEL | GD 111",
      maxLoad: "130 kg",
      motorPower: "550 watt",
      range: "Up to 40 km",
      maxSpeed: "40 km/h",
      imgSrc: "/assets/images/GODA - GODA ANGEL GD 111.png",
    },
  ];

  return (
    <div className="daftar-sepeda" id="daftarsepeda">
      <div className="search-container">
        <div className="search-title">Sepeda Listrik</div>
        <div className="search-box">
          <input type="text" placeholder="Cari" className="search-input" onChange={handleSearchChange} />
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="bike-list">
        {bikes
          .filter((bike) => bike.model.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((bike, index) => (
            <div className="bike-card" key={index}>
              <img alt={bike.model} src={bike.imgSrc} />
              <div className="bike-details">
                <b className="bike-brand">{bike.brand}</b>
                <b className="bike-model">{bike.model}</b>
                <div className="bike-spec">Beban Maksimum | {bike.maxLoad}</div>
                <div className="bike-spec">Motor Power | {bike.motorPower}</div>
                <div className="bike-spec">Jarak Tempuh | {bike.range}</div>
                <div className="bike-spec">Kecepatan Maksimum | {bike.maxSpeed}</div>
              </div>
              <button className="rent-button" onClick={() => handleRentClick(bike)}>
                Sewa Sekarang
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DaftarSepeda;
