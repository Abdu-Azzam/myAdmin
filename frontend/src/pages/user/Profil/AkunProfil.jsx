import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./profile.css";

const AkunProfil = () => {
  const [modal, setModal] = useState(null);
  const navigate = useNavigate();

  const closeModal = () => setModal(null);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/user/login");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <div className="prof-container" id="profil">
      <div className="profile-container">
        <div className="profile-photo-border">
          <img className="profile-photo" src="assets/images/bg front end.jpg" alt="Profile" />
        </div>
        <div className="profile-name-section">
          <h1 className="profile-name">Key Alderen</h1>
          <p className="profile-subtitle">keyalderen</p>
        </div>
        <button onClick={Logout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="options-container">
        <div className="option-item" onClick={() => setModal("uploadPhoto")}>
          <span>Ubah Foto Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("editProfile")}>
          <span>Edit Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("changePassword")}>
          <span>Ubah Kata Sandi</span>
        </div>
        <Link to="/user/transaksi" className="option-item">
          <span>Daftar Transaksi</span>
        </Link>
      </div>

      {modal === "uploadPhoto" && <UploadPhotoModal closeModal={closeModal} />}
      {modal === "editProfile" && <EditProfileModal onClose={closeModal} />}
      {modal === "changePassword" && <ChangePasswordModal closeModal={closeModal} />}
    </div>
  );
};

const UploadPhotoModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Pilih Foto Profil</h2>
    <input type="file" accept="image/*" />
    <button onClick={closeModal}>Tutup</button>
  </div>
);

const EditProfileModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Edit Profil</h2>
    <form>
      <input type="text" placeholder="Nama Lengkap" />
      <input type="text" placeholder="Nama Pengguna" />
      <input type="email" placeholder="Email" />
      <button type="submit">Simpan</button>
    </form>
    <button onClick={closeModal}>Tutup</button>
  </div>
);

const ChangePasswordModal = ({ closeModal }) => (
  <div className="modal">
    <h2>Ubah Kata Sandi</h2>
    <form>
      <input type="password" placeholder="Kata Sandi Lama" />
      <input type="password" placeholder="Kata Sandi Baru" />
      <input type="password" placeholder="Konfirmasi Kata Sandi" />
      <button type="submit">Ubah</button>
    </form>
    <button onClick={closeModal}>Tutup</button>
  </div>
);

export default AkunProfil;
