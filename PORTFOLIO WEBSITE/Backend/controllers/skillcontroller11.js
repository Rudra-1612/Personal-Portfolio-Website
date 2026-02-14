const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
    const skills = await Skill.find();
    res.json(skills);
};
