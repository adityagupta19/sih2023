const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
	{
		eventName: { type: String, required: true },
		imageUrl: String,
		desc: String,
		venue: String,
		date: String,
		host: { type: Schema.Types.ObjectId, ref: "user" },
		users: [{ type: Schema.Types.ObjectId, ref: "user" }],
		isverified: { type: Boolean, default: false },
		rankings: [
			{
				user: { type: Schema.Types.ObjectId },
				rank: { type: String, default: "results not announced yet" },
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("event", eventSchema);
