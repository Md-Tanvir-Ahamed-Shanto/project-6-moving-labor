const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Coverage controller
const createCoverage = async (req, res) => {
  const { title } = req.body;
  try {
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }
    const coverage = await prisma.converage.create({
      data: {
        title,
      },
    });
    res.status(201).json({
      message: "Coverage area created successfully",
      coverage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCoverages = async (req, res) => {
  try {
    const coverages = await prisma.converage.findMany();
    res.status(200).json(coverages);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCoverageById = async (req, res) => {
  const { id } = req.params;
  try {
    const coverage = await prisma.converage.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!coverage) {
      return res.status(404).json({ error: "Coverage area not found" });
    }
    res.status(200).json(coverage);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCoverage = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const coverage = await prisma.converage.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
      },
    });
    res.status(200).json({
      message: "Coverage area updated successfully",
      coverage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCoverage = async (req, res) => {
  const { id } = req.params;
  try {
    const coverage = await prisma.converage.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Coverage area deleted successfully",
      coverage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createCoverage,
  getCoverages,
  getCoverageById,
  updateCoverage,
  deleteCoverage,
};