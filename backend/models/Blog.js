const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
	{
		title:String,
		imageUrl: String,
		desc: String,
    },{
        timestamps:true
    }
);

module.exports = mongoose.model("blog", blogSchema);