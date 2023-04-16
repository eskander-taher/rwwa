const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

const { unlinkfile } = require("../utils/unlinkFile");

// get all blogs
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
});

// get latest 3 blogs
const getLatestBlogs = asyncHandler(async (req, res) => {
  const threeBlogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
  res.status(200).json(threeBlogs);
});

// create a blog
const createBlog = asyncHandler(async (req, res) => {
  console.log(req.body);
  const blog = new Blog({
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    category: req.body.category,
    subCategory: req.body.subCategory,
    image: req.file.filename,
  });

  const savedBlog = await blog.save();
  res.status(201).json(savedBlog);
});

// get one blog
const getBlogById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog!" });
  }

  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ error: "No such blog!" });
  }

  res.status(200).json(blog);
});

// update blog
const updateBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog!" });
  }

  const blog = {
    title: req.body.title,
    text: req.body.text,
    author: req.body.author,
    category: req.body.category,
    subCategory: req.body.subCategory,
    image: req.file.filename,
  };

  // console.log(req.body);
  const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });
  if (!updatedBlog) {
    return res.status(404).json({ error: "No such blog!" });
  }
  console.log(updatedBlog);
  res.status(200).json(updatedBlog);
});

// delete blog
const deleteBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog!" });
  }
  const deletedBlog = await Blog.findOneAndDelete({ _id: id });
  if (!deletedBlog) {
    return res.status(400).json({ error: "No such blog!" });
  }

  // to delete the image of the blog
  unlinkfile(deletedBlog.image);

  res.status(200).json(deletedBlog);
});

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getLatestBlogs,
};
