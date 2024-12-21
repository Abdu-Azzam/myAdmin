import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSepedaContext } from "../context/SepedaContext";

const EditSepeda = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const { sepedaList, updateSepeda } = useSepedaContext(); // Ambil sepedaList dan fungsi update
  const navigate = useNavigate();

  // Cari sepeda berdasarkan ID
  const sepedaToEdit = sepedaList.find((sepeda) => sepeda.id === parseInt(id));

  const [formData, setFormData] = useState({
    namaSepeda: "",
    merek: "",
    jumlah: "",
    gambar: "",
  });

  useEffect(() => {
    if (sepedaToEdit) {
      setFormData({
        namaSepeda: sepedaToEdit.namaSepeda,
        merek: sepedaToEdit.merek,
        jumlah: sepedaToEdit.jumlah,
        gambar: sepedaToEdit.gambar,
      });
    }
  }, [sepedaToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSepeda(id, formData); // Perbarui data sepeda
    navigate("/jenis-sepeda"); // Kembali ke halaman Jenis Sepeda
  };

  if (!sepedaToEdit) {
    return <div>Sepeda tidak ditemukan.</div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Edit Sepeda</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nama Sepeda</label>
          <input type="text" name="namaSepeda" value={formData.namaSepeda} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Merek</label>
          <input type="text" name="merek" value={formData.merek} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Jumlah</label>
          <input type="number" name="jumlah" value={formData.jumlah} onChange={handleChange} style={styles.input} required />
        </div>
        <button type="submit" style={styles.button}>
          Simpan Perubahan
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    marginLeft: "200px",
    backgroundColor: "#fcefe3",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "block",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EditSepeda;
