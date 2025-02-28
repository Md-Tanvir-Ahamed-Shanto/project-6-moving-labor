const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Hero controller
const createHero = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  try {
    if (!title || !content || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const hero = await prisma.hero.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });
    res.status(201).json({
      message: "Hero content created successfully",
      hero,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHeros = async (req, res) => {
  try {
    const heros = await prisma.hero.findMany();
    res.status(200).json(heros);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHeroById = async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await prisma.hero.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!hero) {
      return res.status(404).json({ error: "Hero content not found" });
    }
    res.status(200).json(hero);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const { title, content, imageUrl } = req.body;
  try {
    const hero = await prisma.hero.update({
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
      message: "Hero content updated successfully",
      hero,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteHero = async (req, res) => {
  const { id } = req.params;
  try {
    const hero = await prisma.hero.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Hero content deleted successfully",
      hero,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createHero,
  getHeros,
  getHeroById,
  updateHero,
  deleteHero,
};