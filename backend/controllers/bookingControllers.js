const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Booking controller
const createBooking = async (req, res) => {
  const { movingType, description, movingFrom, movingTo, email, phone } = req.body;
  try {
    if (!movingType || !description || !movingFrom || !movingTo || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const booking = await prisma.booking.create({
      data: {
        movingType,
        description,
        movingFrom,
        movingTo,
        email,
        phone
      },
    });
    res.status(201).json({
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.status(200).json(bookings);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await prisma.booking.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await prisma.booking.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({
      message: "Booking deleted successfully",
      booking,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
};