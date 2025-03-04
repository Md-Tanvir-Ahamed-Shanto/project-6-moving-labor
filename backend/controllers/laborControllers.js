const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Labor controller
const createLabor = async (req, res) => {
  const { fullName, email, address, phone, experience, availability } = req.body;
  try {
    if (!fullName || !email || !address || !phone || !experience || !availability) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const labor = await prisma.labor.create({
      data: {
        fullName,
        email,
        address,
        phone,
        experience,
        availability,
      },
    });
    res.status(201).json({
      message: "Labor application submitted successfully",
      labor,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLabors = async (req, res) => {
  try {
    const labors = await prisma.labor.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json(labors);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLaborById = async (req, res) => {
  const { id } = req.params;
  try {
    const labor = await prisma.labor.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!labor) {
      return res.status(404).json({ error: "Labor application not found" });
    }
    res.status(200).json(labor);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRecentLabors = async (req, res) => {
  try {
    const recentLabors = await prisma.labor.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      take: 10 // Get only the 10 most recent applications
    });
    res.status(200).json(recentLabors);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateLabor = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, address, phone, experience, availability } = req.body;
  try {
    const labor = await prisma.labor.update({
      where: {
        id: parseInt(id),
      },
      data: {
        fullName,
        email,
        address,
        phone,
        experience,
        availability,
      },
    });
    res.status(200).json({
      message: "Labor application updated successfully",
      labor,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteLabor = async (req, res) => {
  const { id } = req.params;
  try {
    const labor = await prisma.labor.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Labor application deleted successfully",
      labor,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createLabor,
  getLabors,
  getLaborById,
  getRecentLabors,
  updateLabor,
  deleteLabor,
};