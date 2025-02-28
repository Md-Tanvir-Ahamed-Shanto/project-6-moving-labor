const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Feature controller
const createFeature = async (req, res) => {
  const { featureName, description } = req.body;
  try {
    if (!featureName || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const feature = await prisma.feature.create({
      data: {
        featureName,
        description,
      },
    });
    res.status(201).json({
      message: "Feature created successfully",
      feature,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFeatures = async (req, res) => {
  try {
    const features = await prisma.feature.findMany();
    res.status(200).json(features);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFeatureById = async (req, res) => {
  const { id } = req.params;
  try {
    const feature = await prisma.feature.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    res.status(200).json(feature);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFeature = async (req, res) => {
  const { id } = req.params;
  const { featureName, description } = req.body;
  try {
    const feature = await prisma.feature.update({
      where: {
        id: parseInt(id),
      },
      data: {
        featureName,
        description,
      },
    });
    res.status(200).json({
      message: "Feature updated successfully",
      feature,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteFeature = async (req, res) => {
  const { id } = req.params;
  try {
    const feature = await prisma.feature.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Feature deleted successfully",
      feature,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFeature,
  getFeatures,
  getFeatureById,
  updateFeature,
  deleteFeature,
};