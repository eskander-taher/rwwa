const express = require("express");
const router = express.Router();
const upload = require("../config/storageConfig");
const { getBlogById } = require("../controllers/blogController");

const {
  getMagazines,
  createMagazine,
  updateMagazine,
  deleteMagazine,
  getMagazineById,
  getNewestMagazine,
  downloadMagazine,
} = require("../controllers/magazineController");

const authAdmin = require("../middleware/auth/authAdmin");

// router.post('/', authAdmin, createMagazine) -- to do
router.get("/", getMagazines);
router.get("/newest", getNewestMagazine);
router.get("/:id", getMagazineById);
router.post("/", upload.array("multi-files", 2), createMagazine);
router.patch("/:id", upload.array("multi-files", 2), updateMagazine);
router.delete("/:id", deleteMagazine);
router.get("/download/:id", downloadMagazine);
module.exports = router;
