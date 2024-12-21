import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Login = ({ setIsLoggedIn, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);

      const user = jwtDecode(accessToken);

      setIsLoggedIn(true);
      setIsAdmin(user.isAdmin);

      if (user.isAdmin) {
        navigate("/user/dashboard");
      } else {
        navigate("/user/beranda");
      }
    } catch (error) {
      if (error.response && error.response.data.msg) {
        setMsg(error.response.data.msg);
      } else {
        setMsg("Terjadi kesalahan pada server.");
      }
    }
  };

  return (
    <div className="login" id="login">
      <div className="parent-log">
        <img className="child-log" alt="Login Illustration" src="/assets/images/logsign.png" />
        <form onSubmit={handleLogin}>
          <p className="error-message">{msg}</p>
          <div className="input-log">
            <div className="uname-log">Email</div>
            <div className="wrapper-log">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan email" className="input-field" required />
            </div>
          </div>
          <br />
          <div className="input-log">
            <div className="uname-log">Kata Sandi</div>
            <div className="wrapper-log">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan kata sandi" className="input-field" required />
            </div>
          </div>

          <button type="submit" className="button-log">
            <div className="button">Masuk</div>
          </button>
        </form>

        <div className="account-check-log">
          <div className="separator-log" />
          <div className="or-log">atau</div>
          <div className="separator-log" />
        </div>

        <div className="social-button-log">
          <div className="flatColorIconsgoogleParent">
            <FontAwesomeIcon icon={faGoogle} className="flatColorIconsgoogle" />
            <div className="masukDenganGoogle">Masuk dengan Google</div>
          </div>
        </div>

        <div className="account-check-log">
          <div className="tidakPunyaAkun">Tidak punya akun?</div>
          <Link to="/user/register" className="link-log">
            Buat akun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
