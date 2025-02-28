const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// AboutUs controller
const createAboutUs = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const aboutUs = await prisma.aboutUs.create({
      data: {
        title,
        content,
      },
    });
    res.status(201).json({
      message: "About Us content created successfully",
      aboutUs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAboutUs = async (req, res) => {
  try {
    const aboutUs = await prisma.aboutUs.findMany();
    res.status(200).json(aboutUs);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAboutUsById = async (req, res) => {
  const { id } = req.params;
  try {
    const aboutUs = await prisma.aboutUs.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!aboutUs) {
      return res.status(404).json({ error: "About Us content not found" });
    }
    res.status(200).json(aboutUs);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAboutUs = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const aboutUs = await prisma.aboutUs.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
      },
    });
    res.status(200).json({
      message: "About Us content updated successfully",
      aboutUs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteAboutUs = async (req, res) => {
  const { id } = req.params;
  try {
    const aboutUs = await prisma.aboutUs.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "About Us content deleted successfully",
      aboutUs,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createAboutUs,
  getAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs,
};