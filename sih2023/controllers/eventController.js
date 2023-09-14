const mongoose = require("mongoose");
const Event = require("../models/Event");
const User = require("../models/User");

const getEvents = async (req, res) => {
	const events = await Event.find({}).sort({ createdAt: -1 });
	res.status(200).json(events);
};

const getEvent = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such json." });
	}
	try {
		const event = await Event.findById(id);
		res.status(200).json(event);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const createEvent = async (req, res) => {
	const { eventName, imageUrl, desc, venue, date, hostid } = req.body;
	if (!mongoose.Types.ObjectId.isValid(hostid)) {
		return res.status(404).json({ error: "No such json." });
	}
	try {
		const host = await User.findById(hostid);
		const event = await Event.create({
			eventName,
			imageUrl,
			desc,
			date,
			venue,
			host,
		});

		res.status(200).json(event);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
};

const addUser = async (req, res) => {
	const { id } = req.params;

	const { userid } = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such Event." });
	}
	if (!mongoose.Types.ObjectId.isValid(userid)) {
		return res.status(404).json({ error: "No such User." });
	}
	try {
		const event = await Event.findById(id);
		const user = await User.findById(userid);
        user.eventsParticipated.push(event);
		user.points = user.points + 25;
		await user.save();
		event.users.push(user);
		
		await event.save();
		res.status(200).json(event);
	} catch (err) {
		res.status(400).json(err);
	}
};

module.exports = {
    addUser,
    createEvent,
    getEvent,
    getEvents
}