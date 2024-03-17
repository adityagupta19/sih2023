const express = require("express");

const {
	login,
	createUser,
	getUser,
	ranking
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/login", login);

router.post("/signup", createUser);

router.get("/:id", getUser);

router.get("/ranking/:id",ranking);



module.exports = router;
