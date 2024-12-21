import React from "react";
import { Link } from "react-router-dom";
import "./rent.css";

const Pembayaran = () => {
  return (
    <div className="pembayaran-container" id="pembayaran">
      <div className="detail-title">Detail Pembayaran</div>
      <div className="payment-info">
        <div className="info-block">
          <div className="info-title">Tanggal Sewa</div>
          <div className="info-value">12-11-2024</div>
        </div>
        <div className="info-block">
          <div className="info-title">Nomor penyewaan</div>
          <div className="info-value">VIP228956785</div>
        </div>
        <div className="info-block">
          <div className="info-title">Total</div>
          <div className="info-value">Rp. 70.000</div>
        </div>
        <div className="info-block">
          <div className="info-title">Metode Pembayaran</div>
          <div className="info-value">Gopay</div>
        </div>
      </div>
      <div className="payment-method">
        <div className="payment-info-title">Informasi cara pembayaran</div>
        <div className="payment-info-description">Pembayaran e-wallet dengan 1 hp :</div>
        <div className="payment-info-description">
          Screenshot QR code pembayaran
          <br />
          Buka e-wallet (ovo/gopay/dana/shopee/link aj)
          <br />
          Tekan tombol scan
          <br />
          Pilih upload gambar atau ambil gambar dari gallery
          <br />
          Lalu pilih gambar yang tadi di screenshot
          <br />
          Lakukan pembayaran
        </div>
      </div>
      <div className="qr-code-title">SCAN QR CODE dibawah ini</div>
      <div className="back-button">
        <Link to="/user/profil" className="back-button-text">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Pembayaran;
