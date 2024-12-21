import React, { useState } from "react";
import { useSepedaContext } from "../context/SepedaContext"; // Import context

const TambahSepeda = () => {
  const { addSepeda } = useSepedaContext();
  const [formData, setFormData] = useState({
    namaSepeda: "",
    merek: "",
    jumlah: "",
    gambar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSepeda(formData); // Mengirim data ke context
    alert("Data berhasil disimpan!");
    setFormData({ namaSepeda: "", merek: "", jumlah: "", gambar: "" }); // Reset form
  };

  return (
    <div style={styles.container}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>Tambah Jenis Sepeda</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="namaSepeda" placeholder="Nama Sepeda Listrik" onChange={handleChange} value={formData.namaSepeda} style={styles.input} />
        <input type="text" name="merek" placeholder="Merek" onChange={handleChange} value={formData.merek} style={styles.input} />
        <input type="text" name="jumlah" placeholder="Jumlah" onChange={handleChange} value={formData.jumlah} style={styles.input} />
        <input type="file" name="gambar" accept="Gambar*" onChange={handleChange} value={formData.gambar} style={styles.input} />
        <button type="submit" style={styles.saveButton}>
          Simpan
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px",
    padding: "20px",
    backgroundColor: "#fcefe3",
    minHeight: "100vh",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  saveButton: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default TambahSepeda;
