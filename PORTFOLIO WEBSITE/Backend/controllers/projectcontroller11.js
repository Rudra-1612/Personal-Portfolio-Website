const Project = require("../models/Project");

exports.getProjects = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

exports.createProject = async (req, res) => {
    const project = await Project.create(req.body);
    res.json(project);
};
