import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./rent.css";

const RentalAcc = () => {
  const location = useLocation();
  const { namaLengkap, selectedBike, durasi, area } = location.state || {};

  return (
    <div className="rent-acc-card" id="rentalacc">
      <img className="acc-img" alt="Pengajuan Berhasil" src="/assets/images/acc.png" />
      <div className="acc-message">
        <b className="acc-title">Yeay! Pengajuan Kamu Berhasil</b>
        <div className="acc-description">Terima kasih sudah melakukan pengajuan ini, selamat menikmati.</div>
      </div>
      <Link to={{ pathname: "/user/transaksi", state: { namaLengkap, selectedBike, durasi, area } }}>
        <button className="buttonklik">Lihat Transaksi</button>
      </Link>
    </div>
  );
};

export default RentalAcc;
