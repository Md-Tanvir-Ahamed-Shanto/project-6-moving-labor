const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Statistic controller
const createStatistic = async (req, res) => {
  const { value, title, description } = req.body;
  try {
    if (!value || !title || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const statistic = await prisma.statistic.create({
      data: {
        value,
        title,
        description,
      },
    });
    res.status(201).json({
      message: "Statistic created successfully",
      statistic,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStatistics = async (req, res) => {
  try {
    const statistics = await prisma.statistic.findMany();
    res.status(200).json(statistics);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getStatisticById = async (req, res) => {
  const { id } = req.params;
  try {
    const statistic = await prisma.statistic.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!statistic) {
      return res.status(404).json({ error: "Statistic not found" });
    }
    res.status(200).json(statistic);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStatistic = async (req, res) => {
  const { id } = req.params;
  const { value, title, description } = req.body;
  try {
    const statistic = await prisma.statistic.update({
      where: {
        id: parseInt(id),
      },
      data: {
        value,
        title,
        description,
      },
    });
    res.status(200).json({
      message: "Statistic updated successfully",
      statistic,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteStatistic = async (req, res) => {
  const { id } = req.params;
  try {
    const statistic = await prisma.statistic.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Statistic deleted successfully",
      statistic,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createStatistic,
  getStatistics,
  getStatisticById,
  updateStatistic,
  deleteStatistic,
};