const express = require('express');

const { getEvents, getEvent, createEvent, addUser } = require('../controllers/eventController');

const router = express.Router();

router.get('/',getEvents);

router.get('/:id',getEvent);

router.post('/host',createEvent);

router.post('/:id/register',addUser);

module.exports = router;
