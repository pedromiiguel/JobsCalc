const express = require('express')
const routes = express.Router();
const JobController = require('./controllers/JobController');
const ProfileController = require('./controllers/ProfileController');
const DashboardController = require('./controllers/DashboardController');



// routes.get('/profile', ProfileController.index)
// routes.post('/profile', ProfileController.update)
// routes.get('/index', DashboardController.index)
// routes.post('/save-job', JobController.save)
// routes.get('/job/:id', JobController.update)
// routes.post('/job/delete/:id', JobController.delete)

routes.get('/index', DashboardController.index)
routes.get('/job', JobController.index)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.delete('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfileController.index)
routes.post('/profile', ProfileController.update)



module.exports = routes;