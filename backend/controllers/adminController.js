const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(404).json({ message: "Invalid email or password" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(404).json({ message: "Invalid email or password" });
  }
  console.log(email);

  const payload = { id: admin._id, role: admin.role };
  const options = { expiresIn: "1y" };
  const token = jwt.sign(payload, process.env.JWT_SECRET, options);

  res.status(200).json({ token, role: admin.role });
});

// create new admin
const createAdmin = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, password, createdAt } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const admin = new Admin({
    name,
    email,
    password: hashedPassword,
    createdAt,
  });

  await admin.save();
  res.status(201).json({ message: "Admin added successfully" });
});

// delete admin
const deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const admin = await Admin.findByIdAndDelete(id);

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }

  res.status(200).json({ message: "Admin deleted successfully" });
});

// update admin
const updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, password, role } = req.body;

  const admin = await Admin.findByIdAndUpdate(
    id,
    { name, email, password, role },
    { new: true }
  );

  if (!admin) {
    return res.status(404).json({ message: "Admin not found" });
  }
  res.status(200).json({ message: "Admin updated successfully" });
});

// get all admins
const getAdmins = asyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json(admins);
});

module.exports = {
  getAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
  login,
};
