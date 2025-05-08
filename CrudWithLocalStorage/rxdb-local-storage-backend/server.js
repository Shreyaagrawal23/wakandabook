const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const syncRoutes = require('./routes/sync');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use .env value or fallback to test MongoDB URI
const mongoUri = process.env.MONGO_URI || "mongodb+srv://testuser:test1234@cluster0.vzra53l.mongodb.net/testdb";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use('/api', syncRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
