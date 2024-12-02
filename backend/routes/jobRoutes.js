// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const {
    assignJob,
    getAllJobs,
    getJobsByUserId,
    getJobsByAccidentId,
    updateJobStatus
} = require('../controllers/jobController');

// Route to assign job to nearest service
router.post('/assign/:accidentId/:serviceType', assignJob);

// Route to fetch all jobs
router.get('/', getAllJobs);

// Route to fetch jobs by user ID
router.get('/user/:userId', getJobsByUserId);

// Route to fetch jobs by accident ID
router.get('/accident/:accidentId', getJobsByAccidentId);

// Route to update job status
router.put('/update/:jobId', updateJobStatus);

module.exports = router;
