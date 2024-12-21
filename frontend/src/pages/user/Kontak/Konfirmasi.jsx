import React from "react";
import { Link } from "react-router-dom";

const konfirmasi = () => {
  return (
    <div className="rent-acc-card" id="konfirmasi">
      <img className="acc-img" src="/assets/images/acc.png" alt="Success Icon" />
      <div className="acc-message">
        <b className="acc-title">Yeay! Pesan kamu sudah terkirim</b>
        <div className="acc-description">Terima kasih telah memakai jasa layanan kami.</div>
      </div>
      <Link to="/user/beranda" className="buttonklik">
        Kembali Ke Beranda
      </Link>
    </div>
  );
};

export default konfirmasi;
