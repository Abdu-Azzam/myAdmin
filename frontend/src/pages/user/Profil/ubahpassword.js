import React, { useState } from "react";

function ChangePasswordModal({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    if (newPassword !== confirmPassword) {
      alert("Kata sandi baru tidak cocok.");
    } else {
      alert("Kata sandi berhasil diubah!");
      onClose();
    }
  };

  return (
    <div className="modal">
      <h2>Ubah Kata Sandi</h2>
      <label>
        Kata sandi saat ini:
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </label>
      <label>
        Kata sandi baru:
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <label>
        Konfirmasi kata sandi baru:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Simpan</button>
    </div>
  );
}

export default ChangePasswordModal;
