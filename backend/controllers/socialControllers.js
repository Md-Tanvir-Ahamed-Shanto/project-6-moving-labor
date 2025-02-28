const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Social controller
const createSocial = async (req, res) => {
  const { socialName, url } = req.body;
  try {
    if (!socialName || !url) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const social = await prisma.social.create({
      data: {
        socialName,
        url,
      },
    });
    res.status(201).json({
      message: "Social link created successfully",
      social,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSocials = async (req, res) => {
  try {
    const socials = await prisma.social.findMany();
    res.status(200).json(socials);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getSocialById = async (req, res) => {
  const { id } = req.params;
  try {
    const social = await prisma.social.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!social) {
      return res.status(404).json({ error: "Social link not found" });
    }
    res.status(200).json(social);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateSocial = async (req, res) => {
  const { id } = req.params;
  const { socialName, url } = req.body;
  try {
    const social = await prisma.social.update({
      where: {
        id: parseInt(id),
      },
      data: {
        socialName,
        url,
      },
    });
    res.status(200).json({
      message: "Social link updated successfully",
      social,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteSocial = async (req, res) => {
  const { id } = req.params;
  try {
    const social = await prisma.social.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Social link deleted successfully",
      social,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createSocial,
  getSocials,
  getSocialById,
  updateSocial,
  deleteSocial,
};