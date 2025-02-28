const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Blog controller
const createBlog = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    if (!title || !content || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });
    res.status(201).json({
      message: "Blog post created successfully",
      blog,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json(blogs);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!blog) {
      return res.status(404).json({ error: "Blog post not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, imageUrl } = req.body;
  try {
    const blog = await prisma.blog.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
        imageUrl,
      },
    });
    res.status(200).json({
      message: "Blog post updated successfully",
      blog,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await prisma.blog.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Blog post deleted successfully",
      blog,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};