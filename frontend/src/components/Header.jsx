import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/assets/images/logo.png" alt="Veloz Bicycle Logo" style={styles.logo} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#ff3b30",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    color: "white",
    width: "100%", // Header memenuhi seluruh lebar
    position: "fixed", // Header tetap di atas
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  title: {
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default Header;
