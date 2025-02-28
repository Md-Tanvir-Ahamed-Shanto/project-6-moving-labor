const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Contact controller
const createContact = async (req, res) => {
  const { email, phone, address } = req.body;
  try {
    if (!email || !phone || !address) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const contact = await prisma.contact.create({
      data: {
        email,
        phone,
        address,
      },
    });
    res.status(201).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.status(200).json(contacts);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await prisma.contact.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const { email, phone, address } = req.body;
  try {
    const contact = await prisma.contact.update({
      where: {
        id: parseInt(id),
      },
      data: {
        email,
        phone,
        address,
      },
    });
    res.status(200).json({
      message: "Contact updated successfully",
      contact,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await prisma.contact.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Contact deleted successfully",
      contact,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
};