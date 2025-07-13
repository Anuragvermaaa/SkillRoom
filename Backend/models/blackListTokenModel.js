const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlacklistTokenSchema = new mongoose.Schema ({
    token: { type: String, required: true, unique: true},
    createdAt: { type: Date, default: Date.now, expires: 86400 }, //token expires in 1 days
});

module.exports = mongoose.model("SkillBlacklistToken", BlacklistTokenSchema);

