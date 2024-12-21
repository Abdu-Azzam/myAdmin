import React from "react";

function UploadPhotoModal({ onClose }) {
  return (
    <div className="modal">
      <h2>Pilih Foto Profil</h2>
      <input type="file" accept="image/*" />
      <button onClick={onClose}>Simpan</button>
    </div>
  );
}

export default UploadPhotoModal;
