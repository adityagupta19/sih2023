const mongoose = require("mongoose");
const User = require("../models/User");

const getUser = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such json." });
	}
	try {
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

const createUser = async (req, res) => {
	const { displayName, email, city, profilePic, password } = req.body;
	const user = await User.findOne({ email: email });
	if (user) {
		return res
			.status(401)
			.json({ error: "User with that email already exists" });
	}
	try {
		const user = await User.create({
			displayName,
			email,
			city,
			profilePic,
			password,
		});
        console.log(user);
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json(err);
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
        console.log(user);
		if ((user.password = password)) {
			res.status(200).json(user);
		} else {
			res.status(401).json({ message: "wrong password" });
		}
	} catch (err) {
		res.status(404).json(err);
	}
};

module.exports = { login, getUser, createUser };
