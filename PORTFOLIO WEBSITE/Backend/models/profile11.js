const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    title: String,
    about: String,
    email: String,
    github: String,
    linkedin: String
});

module.exports = mongoose.model("Profile", profileSchema);
