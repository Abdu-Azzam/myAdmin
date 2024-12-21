import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./rent.css";

const Rental = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [area, setArea] = useState("");
  const [selectedBike, setSelectedBike] = useState("");
  const [durasi, setDurasi] = useState("");
  const [harga, setHarga] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [vaNumber, setVaNumber] = useState("12345678998765430");
  const [showBarcode, setShowBarcode] = useState(false);

  const handleDurasiChange = (event) => {
    const selectedDurasi = event.target.value;
    setDurasi(selectedDurasi);

    const hargaPerDurasi = {
      "15 Menit": 2000,
      "30 Menit": 5000,
      "45 Menit": 7000,
      "1 Jam": 10000,
      "2 Jam": 12000,
      "3 Jam": 15000,
      "4 Jam": 17000,
      "5 Jam": 20000,
      "6 Jam": 22000,
      "12 Jam": 30000,
      "1 Hari": 50000,
      "2 Hari": 60000,
      "3 Hari": 70000,
      "4 Hari": 80000,
      "5 Hari": 90000,
      "1 Minggu": 100000,
    };

    setHarga(hargaPerDurasi[selectedDurasi] || 0);
  };

  const handlePaymentChange = (event) => {
    const selectedMethod = event.target.value;
    setPaymentMethod(selectedMethod);
    setShowBarcode(selectedMethod === "Qris");
  };

  const handleBikeChange = (event) => {
    setSelectedBike(event.target.value);
  };

  return (
    <div className="rent-container" id="rental">
      <h2 className="title">FORM PENGAJUAN SEWA</h2>
      <div className="input">
        <label>Nama Lengkap</label>
        <input type="text" placeholder="Nama Lengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} />
      </div>
      <div className="input">
        <label>No. Telepon</label>
        <input type="tel" placeholder="No. Telepon" />
      </div>
      <div className="input">
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div className="input">
        <label>Pekerjaan</label>
        <select>
          <option>Pilih</option>
          <option>Mahasiswa</option>
          <option>Dosen</option>
          <option>Pelajar</option>
          <option>Pengunjung</option>
        </select>
      </div>

      <div className="input">
        <label>Area</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          <option>Pilih</option>
          <option>Institut Teknologi Sepuluh November</option>
          <option>Universitas Airlangga</option>
          <option>Universitas Negeri Surabaya</option>
        </select>
      </div>

      <div className="input">
        <label>Daftar Sepeda</label>
        <select value={selectedBike} onChange={handleBikeChange}>
          <option>Pilih</option>
          <option>UNITED Salvador 2.0</option>
          <option>EXOTIC Sepeda Listrik | X 630</option>
          <option>Uwinfly D60</option>
          <option>Pacific VENTURA R5</option>
          <option>Uwinfly D7D</option>
          <option>GODA ANGEL | GD 111</option>
        </select>
      </div>

      <div className="input">
        <label>Durasi</label>
        <select value={durasi} onChange={handleDurasiChange}>
          <option>Pilih</option>
          <option>15 Menit</option>
          <option>30 Menit</option>
          <option>45 Menit</option>
          <option>1 Jam</option>
          <option>2 Jam</option>
          <option>3 Jam</option>
          <option>4 Jam</option>
          <option>5 Jam</option>
          <option>6 Jam</option>
          <option>12 Jam</option>
          <option>1 Hari </option>
          <option>2 Hari </option>
          <option>3 Hari </option>
          <option>4 Hari </option>
          <option>5 Hari </option>
          <option>1 Minggu </option>
        </select>
      </div>
      {durasi && (
        <div className="harga">
          <label>Harga Sewa</label>
          <div className="harga">{`Rp ${harga.toLocaleString()}`}</div>
        </div>
      )}

      <div className="input">
        <label>Pembayaran</label>
        <select onChange={handlePaymentChange}>
          <option value="">Pilih</option>
          <option value="Transfer Bank">Transfer Bank</option>
          <option value="Tunai">Tunai</option>
          <option value="Qris">Qris</option>
        </select>

        {paymentMethod === "Transfer Bank" && (
          <div>
            <p>Nomor VA Anda: {vaNumber}</p>
          </div>
        )}

        {showBarcode && (
          <div>
            <img src="/assets/images/barcode.png" alt="QRIS Barcode" />
          </div>
        )}
      </div>

      <div className="notesSection">
        <h3>Notes</h3>
        <textarea placeholder="Catatan" rows="4"></textarea>
      </div>

      <Link to={{ pathname: "/user/rentalacc", state: { namaLengkap, selectedBike, durasi, area, harga, paymentMethod } }}>
        <button className="submit">Kirim Pengajuan</button>
      </Link>
    </div>
  );
};

export default Rental;
