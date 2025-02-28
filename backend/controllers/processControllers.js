const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Process controller
const createProcess = async (req, res) => {
  const { processName, description } = req.body;
  try {
    if (!processName || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const process = await prisma.proces.create({
      data: {
        processName,
        description,
      },
    });
    res.status(201).json({
      message: "Process created successfully",
      process,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProcesses = async (req, res) => {
  try {
    const processes = await prisma.proces.findMany();
    res.status(200).json(processes);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProcessById = async (req, res) => {
  const { id } = req.params;
  try {
    const process = await prisma.proces.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!process) {
      return res.status(404).json({ error: "Process not found" });
    }
    res.status(200).json(process);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProcess = async (req, res) => {
  const { id } = req.params;
  const { processName, description } = req.body;
  try {
    const process = await prisma.proces.update({
      where: {
        id: parseInt(id),
      },
      data: {
        processName,
        description,
      },
    });
    res.status(200).json({
      message: "Process updated successfully",
      process,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProcess = async (req, res) => {
  const { id } = req.params;
  try {
    const process = await prisma.proces.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Process deleted successfully",
      process,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createProcess,
  getProcesses,
  getProcessById,
  updateProcess,
  deleteProcess,
};