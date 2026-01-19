const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('../backend/routes/authRoutes')
require('dotenv').config();

const app = express();
app.use(express.json()); // Gelen JSON verilerini okuyabilmek için

app.use('/api/auth', authRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB'ye başarıyla bağlandık knk!"))
  .catch((err) => console.error("Bağlantı hatası:", err));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});