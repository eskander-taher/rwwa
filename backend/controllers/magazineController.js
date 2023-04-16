const asyncHandler = require("express-async-handler");
const Magazine = require("../models/magazineModel");
const mongoose = require("mongoose");

const { unlinkfile } = require("../utils/unlinkFile");

// get all magazines
const getMagazines = asyncHandler(async (req, res) => {
  const magazines = await Magazine.find();
  res.status(200).json(magazines);
});

// get newest magazine
const getNewestMagazine = asyncHandler(async (req, res) => {
  const newest = await Magazine.find().sort({ createdAt: -1 }).limit(1);
  res.status(200).json(newest);
});

// create a magazine
const createMagazine = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.files);
  const magazine = new Magazine({
    versionNum: req.body.versionNum,
    description: req.body.description,
    file: req.files[0].filename,
    image: req.files[1].filename,
    url: req.body.url,
  });

  const savedMagazine = await magazine.save();
  res.status(201).json(savedMagazine);
});

// update a magazine
const updateMagazine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const oldMagazine = await Magazine.findById(id);

  const magazine = {
    versionNum: req.body.versionNum,
    description: req.body.description,
    file: req.files[0].filename,
    image: req.files[1].filename,
    url: req.body.url,
  };

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such magazine!" });
  }

  const updatedMagazine = await Magazine.findByIdAndUpdate(
    { _id: id },
    magazine,
    { new: true }
  );
  if (!updatedMagazine) {
    return res.status(404).json({ error: "No such magazine!" });
  }

  unlinkfile(oldMagazine.file);
  unlinkfile(oldMagazine.image);

  res.status(200).json(updatedMagazine);
});

// get one magazine by id
const getMagazineById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog!" });
  }

  const magazine = await Magazine.findById(id);
  if (!magazine) {
    return res.status(404).json({ error: "No such magazine!" });
  }

  res.status(200).json(magazine);
});

// delete magazine
const deleteMagazine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such magazine!" });
  }
  const deletedMagazine = await Magazine.findOneAndDelete({ _id: id });
  if (!deletedMagazine) {
    return res.status(400).json({ error: "No such magazine!" });
  }

  unlinkfile(deletedMagazine.file);
  unlinkfile(deletedMagazine.image);

  res.status(200).json(deletedMagazine);
});

// download magazine
const downloadMagazine = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such magazine!" });
  // }

  const magazine = await Magazine.findOne({ file: id });
  if (!magazine) {
    return res.status(404).json({ error: "No such magazine!" });
  }

  const file = `${__dirname}/../storage/${magazine.file}`;
  res.status(200).download(file);
});
module.exports = {
  getMagazines,
  createMagazine,
  updateMagazine,
  deleteMagazine,
  getNewestMagazine,
  getMagazineById,
  downloadMagazine,
};
