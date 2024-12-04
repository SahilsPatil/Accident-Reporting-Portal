const express = require('express');
const bodyParser = require("body-parser");
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
// app.use(express.json());
// app.use(express.json({ limit: "50mb" })); // Default is 1mb
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(bodyParser.json({ limit: '50mb' })); 
// app.use(bodyParser.json({limit: '50mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// app.use(bodyParser.text({ limit: '200mb' }));
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 10, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 10, type: 'application/x-www-form-urlencoded' });
app.use(jsonParser);
app.use(urlencodedParser);
// app.use((req, res, next) => {
//     console.log(`Payload size: ${req.headers["content-length"]} bytes`);
//     next();
// });
app.use("/images", express.static("./accidents/images"));

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
module.exports = app;
