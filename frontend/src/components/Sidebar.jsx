import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <Link style={styles.link} to="/">
        Dashboard
      </Link>
      <Link style={styles.link} to="/jenis-sepeda">
        Jenis Sepeda
      </Link>
      <Link style={styles.link} to="/transaksi">
        Transaksi
      </Link>
      <Link style={styles.link} to="/pengguna">
        Pengguna
      </Link>
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: "#ff6f61",
    height: "100vh",
    width: "200px",
    padding: "90px 0 0 20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    position: "fixed",
    left: "0",
    top: "0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
  },
  activeLink: {
    fontWeight: "bold", // Membuat teks tebal
    fontSize: "18px", // Memperbesar teks
    backgroundColor: "#e64a45", // Warna latar belakang berbeda
  },
};

export default Sidebar;
