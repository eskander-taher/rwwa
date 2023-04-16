const express = require("express");
const upload = require("../config/storageConfig");
const router = express.Router();

const {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getLatestBlogs,
} = require("../controllers/blogController");
const authAdmin = require("../middleware/auth/authAdmin");

// router.post('/', authAdmin, createBlog) -- after authentication
router.get("/", getBlogs);
router.get("/latest", getLatestBlogs);
router.get("/:id", getBlogById);
router.post("/",authAdmin, upload.single("image"), createBlog);
router.patch("/:id", upload.single("image"), updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
