import React, { useState } from "react";


const EditProfileModal = ({ onClose }) => {
  const [fullName, setFullName] = useState("Key Alderen");
  const [username, setUsername] = useState("Key Alderen");
  const [email, setEmail] = useState("keyalderen@gmail.com");

  const handleSave = () => {
    alert(`Profil diperbarui:\nNama Lengkap: ${fullName}\nNama Pengguna: ${username}\nEmail: ${email}`);
    onClose();
  };

  return (
    <div className="modal">
    <div className="modal-overlay">
      <div className="modal-box">
        <h2 className="modal-title">Edit Profil</h2>
        <form className="modal-form">
          <div className="form-field">
            <label className="form-label">Nama Lengkap</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Nama Pengguna</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>
          <button type="button" className="save-button" onClick={handleSave}>
            Edit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EditProfileModal;
