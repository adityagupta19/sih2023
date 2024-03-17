const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')



const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/user');
const eventRoutes = require('./routes/event');
const { leaderBoard } = require('./controllers/userControllers');
const { getBlogs, getBlog, createBlog } = require('./controllers/blogController');

app.use('/event',eventRoutes);
app.use('/user',userRoutes);
app.get('/leaderboard',leaderBoard)
app.get('/blog',getBlogs)
app.get('/blog/:id',getBlog)
app.post('/blog',createBlog)




mongoose
	.connect(process.env.DB_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("listening on 4000");
		});
	})
	.catch((err) => {
		console.log(err);
	});