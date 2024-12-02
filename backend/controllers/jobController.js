// controllers/jobController.js
const Job = require('../models/Job');
const Accident = require('../models/Accident');
const User = require('../models/User');

// Helper function to calculate distance between two coordinates (Haversine formula)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

// Assign job to nearest emergency service
exports.assignJob = async (req, res) => {
    try {
        const { accidentId, serviceType } = req.params;

        const accident = await Accident.findById(accidentId);
        if (!accident) {
            return res.status(404).json({ message: 'Accident not found' });
        }

        // Find emergency service users with the specified role
        const emergencyUsers = await User.find({ role: serviceType });

        // Check if there are any emergency users
        if (emergencyUsers.length === 0) {
            return res.status(404).json({ message: 'No nearby emergency service found' });
        }

        // Find the nearest user
        let nearestUser = null;
        let shortestDistance = Infinity;
        emergencyUsers.forEach(user => {
            const distance = calculateDistance(
                accident.location.lat,
                accident.location.lng,
                user.location.lat,
                user.location.lng
            );
            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestUser = user;
            }
        });

        if (!nearestUser) {
            return res.status(404).json({ message: 'No nearby emergency service found' });
        }

        // Create job assignment
        const newJob = new Job({
            accidentId: accident._id,
            assignedUserId: nearestUser._id,
            type: serviceType,
            description: `Job assigned to ${serviceType} at nearest location`
        });

        await newJob.save();

        // Update accident status
        accident.status = 'Open';
        await accident.save();

        return res.json(newJob);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('accidentId').populate('assignedUserId');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get jobs by user ID
exports.getJobsByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const jobs = await Job.find({ assignedUserId: userId }).populate('accidentId');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get jobs by accident ID
exports.getJobsByAccidentId = async (req, res) => {
    try {
        const { accidentId } = req.params;
        const jobs = await Job.find({ accidentId }).populate('assignedUserId');
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update job status
exports.updateJobStatus = async (req, res) => {
    try {
        const { jobId } = req.params;
        const { status, description } = req.body;

        const job = await Job.findByIdAndUpdate(jobId, { status, description }, { new: true });
        if (!job) return res.status(404).json({ message: 'Job not found' });

        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
