const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Service controller
const createService = async (req, res) => {
  const { serviceName, imageUrl } = req.body;
  try {
    if (!serviceName || !imageUrl) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const service = await prisma.service.create({
      data: {
        serviceName,
        imageUrl,
      },
    });
    res.status(201).json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.status(200).json(services);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { serviceName, imageUrl } = req.body;
  try {
    const service = await prisma.service.update({
      where: {
        id: parseInt(id),
      },
      data: {
        serviceName,
        imageUrl,
      },
    });
    res.status(200).json({
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await prisma.service.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Service deleted successfully",
      service,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
};