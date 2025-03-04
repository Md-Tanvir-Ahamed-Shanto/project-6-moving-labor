const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Item controller
const createItem = async (req, res) => {
  const { name, slug } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const item = await prisma.item.create({
      data: {
        name,
        slug,
      },
    });
    res.status(201).json({
      message: "Item created successfully",
      item,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.item.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { name, slug } = req.body;
  try {
    const item = await prisma.item.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        slug,
      },
    });
    res.status(200).json({
      message: "Item updated successfully",
      item,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await prisma.item.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Item deleted successfully",
      item,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
};