const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const accidentRoutes = require('./routes/accidentRoutes');
const accidentSummaryRoutes = require('./routes/accidentSummaryRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/accidents', accidentRoutes);
app.use('/api/accident-summary', accidentSummaryRoutes);
app.use('/api/users', userRoutes);    
app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
