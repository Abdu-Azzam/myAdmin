import React from "react";
import { useNavigate } from "react-router-dom";
import { useSepedaContext } from "../context/SepedaContext";

const JenisSepeda = () => {
  const navigate = useNavigate();
  const { sepedaList, removeSepeda } = useSepedaContext();

  // Fungsi untuk mengedit sepeda
  const handleEdit = (id) => {
    navigate(`/EditSepeda/${id}`);
  };

  // Fungsi untuk menghapus sepeda
  const handleDelete = (id) => {
    removeSepeda(id);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Jenis Sepeda</h2>
      <button style={styles.Button} onClick={() => navigate("/TambahSepeda")}>
        Tambah
      </button>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>No</th>
            <th style={styles.th}>Nama Sepeda</th>
            <th style={styles.th}>Merek</th>
            <th style={styles.th}>Jumlah</th>
            <th style={styles.th}>Gambar</th>
            <th style={styles.th}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {sepedaList.length === 0 ? (
            <tr>
              <td colSpan="5" style={styles.td}>
                Tidak ada data sepeda.
              </td>
            </tr>
          ) : (
            sepedaList.map((sepeda, index) => (
              <tr key={sepeda.id}>
                <td style={styles.td}>{index + 1}</td>
                <td style={styles.td}>{sepeda.namaSepeda}</td>
                <td style={styles.td}>{sepeda.merek}</td>
                <td style={styles.td}>{sepeda.jumlah}</td>
                {/* Menampilkan gambar */}
                <td style={styles.td}>
                  <img src={sepeda.gambar} alt={`Gambar ${sepeda.namaSepeda}`} style={{ width: "100px", height: "auto" }} />
                </td>
                <td style={styles.td}>
                  <button style={styles.editButton} onClick={() => handleEdit(sepeda.id)}>
                    Edit
                  </button>
                  <button style={styles.deleteButton} onClick={() => handleDelete(sepeda.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
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
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  table: {
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    borderTop: "5px solid #a855f7",
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  th: {
    backgroundColor: "#f9f9f9",
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  Button: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
  },
  editButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteButton: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default JenisSepeda;
