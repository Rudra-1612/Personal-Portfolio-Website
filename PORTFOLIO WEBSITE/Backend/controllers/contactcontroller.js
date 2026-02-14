const Contact = require("../models/Contact");
const transporter = require("../config/email");

exports.sendContact = async (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({ error: "All fields required" });

    const contact = await Contact.create({ name, email, message });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Portfolio Contact",
        text: message
    });

    res.json({ success: true });
};
