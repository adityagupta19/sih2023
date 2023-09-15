const express = require("express");

const {
	login,
	createUser,
	getUser,
	leaderBoard
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/login", login);

router.post("/signup", createUser);

router.get("/:id", getUser);



module.exports = router;
