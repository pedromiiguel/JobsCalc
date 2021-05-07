const Job = require('../model/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../model/Profile');

module.exports = {
  async index(req, res) {
    try {
      const job = await Job.get();

      return res.json(job);
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        error: 'Unexpected error finding this job in the database',
      });
    }
  },

  async save(req, res) {
    const job = req.body;

    try {
      await Job.create({
        name: req.body.name,
        daily_hours: req.body.daily_hours,
        total_hours: req.body.total_hours,
        created_at: Date.now(),
      });

      return res.status(201).json(job);
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        error: 'Unexpected error while creating the database',
      });
    }
  },

  async show(req, res) {
    const jobId = req.params.id;

    try {
      const job = await Job.show(jobId);

      if (!job) {
        return res.send('Job not found!');
      }

      return res.status(201).json(job);
    } catch (error) {
      return response.status(400).json({
        error: 'Unexpected error finding this job in the database',
      });
    }
  },

  async update(req, res) {
    const jobId = req.params.id;

    const updatedJob = {
      name: req.body.name,
      daily_hours: req.body.daily_hours,
      total_hours: req.body.total_hours,
      created_at: Date.now(),
    };

    try {
      await Job.update(updatedJob, jobId);

      return res.status(201).send();
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        error: 'Unexpected error while updating the database',
      });
    }
  },

  async delete(req, res) {
    const jobId = req.params.id;

    try {
      await Job.delete(jobId);

      return res.status(201).json({ message: 'Job deleted' });
    } catch (error) {
      console.log(error);

      return response.status(400).json({
        error: 'Unexpected error while deleting from the database',
      });
    }
  },
};
