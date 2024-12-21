const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public/images"));

// Setup multer untuk menyimpan gambar di folder "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Menyimpan file di folder "uploads"
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Ekstensi file (misalnya .jpg, .png)
    cb(null, Date.now() + ext); // Nama file unik berdasarkan waktu
  },
});

const upload = multer({ storage: storage });

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sepeda_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL database.");
});

// Mendapatkan semua sepeda
app.get("/sepeda", (req, res) => {
  db.query("SELECT * FROM sepeda", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Menambahkan sepeda baru dengan gambar
app.post("/sepeda", upload.single("gambar"), (req, res) => {
  const { namaSepeda, merek, jumlah } = req.body;
  const gambar = req.file ? req.file.filename : null; // Menyimpan nama file gambar jika ada
  const sql = "INSERT INTO sepeda (namaSepeda, merek, jumlah, gambar) VALUES (?, ?, ?, ?)";
  db.query(sql, [namaSepeda, merek, jumlah, gambar], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, gambar: gambar });
  });
});

// Mengupdate data sepeda
app.put("/sepeda/:id", upload.single("gambar"), (req, res) => {
  const { id } = req.params;
  const { namaSepeda, merek, jumlah } = req.body;
  const gambar = req.file ? req.file.filename : null; // Menyimpan gambar baru jika ada
  const sql = "UPDATE sepeda SET namaSepeda = ?, merek = ?, jumlah = ?, gambar = ? WHERE id = ?";
  db.query(sql, [namaSepeda, merek, jumlah, gambar, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Menghapus sepeda
app.delete("/sepeda/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM sepeda WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.sendStatus(200);
  });
});

// Menjalankan server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
