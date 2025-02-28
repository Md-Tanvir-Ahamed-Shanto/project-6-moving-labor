const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Booking controller
const createBooking = async (req, res) => {
  const { userId, serviceId, bookingDate, totalPrice, specialInstructions } = req.body;
  try {
    if (!userId || !serviceId || !bookingDate || !totalPrice) {
      return res.status(400).json({ error: "Required fields are missing" });
    }
    const booking = await prisma.booking.create({
      data: {
        userId: parseInt(userId),
        serviceId: parseInt(serviceId),
        bookingDate: new Date(bookingDate),
        totalPrice: parseFloat(totalPrice),
        specialInstructions,
      },
      include: {
        user: true,
        service: true,
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
      include: {
        user: true,
        service: true,
      },
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
      include: {
        user: true,
        service: true,
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

const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { bookingDate, totalPrice, specialInstructions, status, paymentStatus } = req.body;
  try {
    const booking = await prisma.booking.update({
      where: {
        id: parseInt(id),
      },
      data: {
        bookingDate: bookingDate ? new Date(bookingDate) : undefined,
        totalPrice: totalPrice ? parseFloat(totalPrice) : undefined,
        specialInstructions,
        status,
        paymentStatus,
      },
      include: {
        user: true,
        service: true,
      },
    });
    res.status(200).json({
      message: "Booking updated successfully",
      booking,
    });
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
      include: {
        user: true,
        service: true,
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
  updateBooking,
  deleteBooking,
};