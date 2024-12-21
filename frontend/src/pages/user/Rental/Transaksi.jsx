import React from "react";
import { useNavigate } from "react-router-dom";

const Transaksi = () => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate("/user/pembayaran");
  };

  return (
    <div style={styles.container} id="transaksi">
      <h2 style={styles.heading}>Transaksi</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Lengkap</th>
              <th style={styles.th}>Tanggal</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Key Alderan</td>
              <td style={styles.td}>12-11-2024</td>
              <td style={styles.td}>70.000</td>
              <td style={styles.td}>Tertunda</td>
              <td style={styles.td}>
                <button style={styles.detailButton} onClick={handleDetailClick}>
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#fcefe3",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  tableWrapper: {
    borderTop: "5px solid #a855f7",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    maxWidth: "80%",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
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
  detailButton: {
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
  },
};

export default Transaksi;
