const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Quotes controller
const createQuote = async (req, res) => {
  const { userId, estimatedPrice, serviceType, distance, weightEstimate } = req.body;
  try {
    if (!userId || !estimatedPrice || !serviceType || !distance || !weightEstimate) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const quote = await prisma.quotes.create({
      data: {
        userId: parseInt(userId),
        estimatedPrice: parseFloat(estimatedPrice),
        serviceType,
        distance: parseFloat(distance),
        weightEstimate: parseFloat(weightEstimate),
      },
      include: {
        user: true,
      },
    });
    res.status(201).json({
      message: "Quote created successfully",
      quote,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getQuotes = async (req, res) => {
  try {
    const quotes = await prisma.quotes.findMany({
      include: {
        user: true,
      },
    });
    res.status(200).json(quotes);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quotes.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        user: true,
      },
    });
    if (!quote) {
      return res.status(404).json({ error: "Quote not found" });
    }
    res.status(200).json(quote);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateQuote = async (req, res) => {
  const { id } = req.params;
  const { estimatedPrice, serviceType, distance, weightEstimate } = req.body;
  try {
    const quote = await prisma.quotes.update({
      where: {
        id: parseInt(id),
      },
      data: {
        estimatedPrice: estimatedPrice ? parseFloat(estimatedPrice) : undefined,
        serviceType,
        distance: distance ? parseFloat(distance) : undefined,
        weightEstimate: weightEstimate ? parseFloat(weightEstimate) : undefined,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({
      message: "Quote updated successfully",
      quote,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteQuote = async (req, res) => {
  const { id } = req.params;
  try {
    const quote = await prisma.quotes.delete({
      where: {
        id: parseInt(id),
      },
      include: {
        user: true,
      },
    });
    res.status(200).json({
      message: "Quote deleted successfully",
      quote,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createQuote,
  getQuotes,
  getQuoteById,
  updateQuote,
  deleteQuote,
};