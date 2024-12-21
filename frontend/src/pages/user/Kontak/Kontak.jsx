import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import "./kontak.css";

const ContactForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/user/konfirmasi");
  };

  return (
    <div className="main-content" id="kontakkami">
      <h1 className="title">Hubungi Kami</h1>
      <p className="contact-subtitle">Silakan isi formulir di bawah untuk memberikan komentar, pertanyaan, atau keluhan.</p>
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Info Kontak</h2>
            <p>Katakan sesuatu untuk memulai obrolan langsung!</p>
            <p className="phone-number">+62 812-3456-7890</p>
            <p className="email">
              <a href="mailto:email@example.com">email@example.com</a>
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" aria-label="Discord">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="firstName">Nama Depan</label>
                <input id="firstName" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Nama Belakang</label>
                <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Nomor Telepon</label>
              <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label htmlFor="message">Pesan</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="buttonklik">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
