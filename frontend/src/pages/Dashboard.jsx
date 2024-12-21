import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h2>Selamat datang Admin</h2>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", // Menggunakan Flexbox
    justifyContent: "center", // Pusatkan secara horizontal
    alignItems: "center", // Pusatkan secara vertikal
    height: "100vh", // Tinggi penuh viewport
    marginLeft: "200px", // Mengimbangi sidebar dengan lebar 200px
    backgroundColor: "#f8f8f8", // Opsional, untuk memberikan latar belakang
  },
};

export default Dashboard;
