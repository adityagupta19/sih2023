const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		displayName: {
			type: String,
			required: true,
		},
		email: { type: String, required: true, unique: true },
		city: String,
		profilePic: String,
		points: { type: Number, default: 0 },
		coins: { type: Number, default: 0 },
		password: { type: String, required: true },
		eventsParticipated: [{ type: Schema.Types.ObjectId, ref: "event" }],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("user", userSchema);
