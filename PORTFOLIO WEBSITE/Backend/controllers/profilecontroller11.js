const Profile = require("../models/Profile");

exports.getProfile = async (req, res) => {
    const profile = await Profile.findOne();
    res.json(profile);
};
