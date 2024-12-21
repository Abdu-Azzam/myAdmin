import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SepedaProvider } from "./context/SepedaContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Lazy Loading Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const JenisSepeda = React.lazy(() => import("./pages/JenisSepeda"));
const Transaksi = React.lazy(() => import("./pages/Transaksi"));
const Pengguna = React.lazy(() => import("./pages/Pengguna"));
const Loginadmin = React.lazy(() => import("./pages/Loginadmin"));
const TambahSepeda = React.lazy(() => import("./pages/TambahSepeda"));
const EditSepeda = React.lazy(() => import("./pages/EditSepeda"));
const Login = React.lazy(() => import("./pages/user/login-signup/Login"));
const Register = React.lazy(() => import("./pages/user/login-signup/Register"));
const Beranda = React.lazy(() => import("./pages/user/Beranda/Beranda"));
const DaftarSepeda = React.lazy(() => import("./pages/user/DaftarSepeda/DaftarSepeda"));
const Lokasi = React.lazy(() => import("./pages/user/Lokasi/Lokasi"));
const AkunProfil = React.lazy(() => import("./pages/user/Profil/AkunProfil"));
const Rental = React.lazy(() => import("./pages/user/Rental/Rental"));
const Sewa = React.lazy(() => import("./pages/user/Rental/Sewa"));
const RentalAcc = React.lazy(() => import("./pages/user/Rental/RentalAcc"));
const Kontak = React.lazy(() => import("./pages/user/Kontak/Kontak"));
const Konfirmasi = React.lazy(() => import("./pages/user/Kontak/Konfirmasi"));
const TransaksiUser = React.lazy(() => import("./pages/user/Rental/Transaksi"));
const Pembayaran = React.lazy(() => import("./pages/user/Rental/Pembayaran"));

// Layout for Dashboard pages (with Sidebar and Header)
const DashboardLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1, marginTop: "70px" }}>
      <Header />
      {children}
    </div>
  </div>
);

// Layout for User pages (with Navbar and Footer)
const UserLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

// Main App Component
const App = () => (
  <Router>
    <SepedaProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={<Loginadmin />} />
          <Route
            path="/loginadmin"
            element={
              <DashboardLayout>
                <Loginadmin />
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/jenis-sepeda"
            element={
              <DashboardLayout>
                <JenisSepeda />
              </DashboardLayout>
            }
          />
          <Route
            path="/transaksi"
            element={
              <DashboardLayout>
                <Transaksi />
              </DashboardLayout>
            }
          />
          <Route
            path="/pengguna"
            element={
              <DashboardLayout>
                <Pengguna />
              </DashboardLayout>
            }
          />
          <Route
            path="/TambahSepeda"
            element={
              <DashboardLayout>
                <TambahSepeda />
              </DashboardLayout>
            }
          />
          <Route
            path="/EditSepeda/:id"
            element={
              <DashboardLayout>
                <EditSepeda />
              </DashboardLayout>
            }
          />

          {/* User Routes */}
          <Route
            path="/user/login"
            element={
              <UserLayout>
                <Login />
              </UserLayout>
            }
          />
          <Route
            path="/user/register"
            element={
              <UserLayout>
                <Register />
              </UserLayout>
            }
          />
          <Route
            path="/user/beranda"
            element={
              <UserLayout>
                <Beranda />
              </UserLayout>
            }
          />
          <Route
            path="/user/lokasi"
            element={
              <UserLayout>
                <Lokasi />
              </UserLayout>
            }
          />
          <Route
            path="/user/profil"
            element={
              <UserLayout>
                <AkunProfil />
              </UserLayout>
            }
          />
          <Route
            path="/user/daftarsepeda"
            element={
              <UserLayout>
                <DaftarSepeda />
              </UserLayout>
            }
          />
          <Route
            path="/user/rental"
            element={
              <UserLayout>
                <Rental />
              </UserLayout>
            }
          />
          <Route
            path="/user/sewa"
            element={
              <UserLayout>
                <Sewa />
              </UserLayout>
            }
          />
          <Route
            path="/user/rentalacc"
            element={
              <UserLayout>
                <RentalAcc />
              </UserLayout>
            }
          />
          <Route
            path="/user/kontak"
            element={
              <UserLayout>
                <Kontak />
              </UserLayout>
            }
          />
          <Route
            path="/user/konfirmasi"
            element={
              <UserLayout>
                <Konfirmasi />
              </UserLayout>
            }
          />
          <Route
            path="/user/transaksi"
            element={
              <UserLayout>
                <TransaksiUser />
              </UserLayout>
            }
          />
          <Route
            path="/user/pembayaran"
            element={
              <UserLayout>
                <Pembayaran />
              </UserLayout>
            }
          />

          {/* Not Found */}
          <Route path="*" element={<div>404 - Halaman Tidak Ditemukan</div>} />
        </Routes>
      </Suspense>
    </SepedaProvider>
  </Router>
);

export default App;
