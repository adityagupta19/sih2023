const mongoose = require("mongoose");

const Blog = require('../models/Blog');

const getBlogs = async (req, res) => {
	const blogs = await Blog.find({}).sort({ createdAt: -1 });
	res.status(200).json(blogs);
};

const getBlog = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such json." });
	}
	try {
		const blog = await Blog.findById(id);
		console.log(blog);
		res.status(200).json(blog);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}

const createBlog = async (req,res) => {
    const {desc , imageUrl,title} = req.body;
    try {
		
		const blog = await Blog.create({
			desc,imageUrl,title
		});

		res.status(200).json(blog);
	} catch (err) {
		console.log(err);
		res.status(400).json(err);
	}
}

module.exports = {getBlogs,getBlog,createBlog} ;