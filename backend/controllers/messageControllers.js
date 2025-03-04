const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Message controller
const createMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    res.status(201).json({
      message: "Message sent successfully",
      newMessage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMessageById = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await prisma.message.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateMessage = async (req, res) => {
  const { id } = req.params;
  const { name, email, subject, message } = req.body;
  try {
    const updatedMessage = await prisma.message.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        email,
        subject,
        message,
      },
    });
    res.status(200).json({
      message: "Message updated successfully",
      updatedMessage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await prisma.message.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Message deleted successfully",
      deletedMessage,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMessage,
  getMessages,
  getMessageById,
  updateMessage,
  deleteMessage,
};