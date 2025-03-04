const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");
const serviceController = require("../controllers/serviceControllers");
const processController = require("../controllers/processControllers");
const featureController = require("../controllers/featureControllers");
const statisticController = require("../controllers/statisticControllers");
const socialController = require("../controllers/socialControllers");
const bookingController = require("../controllers/bookingControllers");
const quotesController = require("../controllers/quotesControllers");
const contactController = require("../controllers/contactControllers");
const aboutUsController = require("../controllers/aboutUsControllers");
const messageController = require("../controllers/messageControllers");
const heroController = require("../controllers/heroControllers");
const coverageController = require("../controllers/coverageControllers");
const blogController = require("../controllers/blogControllers");
const itemController = require("../controllers/itemControllers");
const laborController = require("../controllers/laborControllers");

// Example route
router.get("/", (req, res) => {
  res.send("Welcome to Server API!");
});

//auth
router.post("/login", authController.login);

// user
router.post("/user", userController.userCreate);
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

// service
router.post("/service", serviceController.createService);
router.get("/service", serviceController.getServices);
router.get("/service/:id", serviceController.getServiceById);
router.put("/service/:id", serviceController.updateService);
router.delete("/service/:id", serviceController.deleteService);

// process
router.post("/process", processController.createProcess);
router.get("/process", processController.getProcesses);
router.get("/process/:id", processController.getProcessById);
router.put("/process/:id", processController.updateProcess);
router.delete("/process/:id", processController.deleteProcess);

// feature
router.post("/feature", featureController.createFeature);
router.get("/feature", featureController.getFeatures);
router.get("/feature/:id", featureController.getFeatureById);
router.put("/feature/:id", featureController.updateFeature);
router.delete("/feature/:id", featureController.deleteFeature);

// statistic
router.post("/statistic", statisticController.createStatistic);
router.get("/statistic", statisticController.getStatistics);
router.get("/statistic/:id", statisticController.getStatisticById);
router.put("/statistic/:id", statisticController.updateStatistic);
router.delete("/statistic/:id", statisticController.deleteStatistic);

// social
router.post("/social", socialController.createSocial);
router.get("/social", socialController.getSocials);
router.get("/social/:id", socialController.getSocialById);
router.put("/social/:id", socialController.updateSocial);
router.delete("/social/:id", socialController.deleteSocial);

// booking
router.post("/booking", bookingController.createBooking);
router.get("/booking", bookingController.getBookings);
router.get("/booking/:id", bookingController.getBookingById);
router.put("/booking/:id", bookingController.updateBooking);
router.delete("/booking/:id", bookingController.deleteBooking);

// quotes
router.post("/quotes", quotesController.createQuote);
router.get("/quotes", quotesController.getQuotes);
router.get("/quotes/:id", quotesController.getQuoteById);
router.put("/quotes/:id", quotesController.updateQuote);
router.delete("/quotes/:id", quotesController.deleteQuote);

// contact
router.post("/contact", contactController.createContact);
router.get("/contact", contactController.getContacts);
router.get("/contact/:id", contactController.getContactById);
router.put("/contact/:id", contactController.updateContact);
router.delete("/contact/:id", contactController.deleteContact);

// aboutUs
router.post("/about-us", aboutUsController.createAboutUs);
router.get("/about-us", aboutUsController.getAboutUs);
router.get("/about-us/:id", aboutUsController.getAboutUsById);
router.put("/about-us/:id", aboutUsController.updateAboutUs);
router.delete("/about-us/:id", aboutUsController.deleteAboutUs);

// message
router.post("/message", messageController.createMessage);
router.get("/message", messageController.getMessages);
router.get("/message/:id", messageController.getMessageById);
router.put("/message/:id", messageController.updateMessage);
router.delete("/message/:id", messageController.deleteMessage);

// hero
router.post("/hero", heroController.createHero);
router.get("/hero", heroController.getHeros);
router.get("/hero/:id", heroController.getHeroById);
router.put("/hero/:id", heroController.updateHero);
router.delete("/hero/:id", heroController.deleteHero);

// coverage
router.post("/coverage", coverageController.createCoverage);
router.get("/coverage", coverageController.getCoverages);
router.get("/coverage/:id", coverageController.getCoverageById);
router.put("/coverage/:id", coverageController.updateCoverage);
router.delete("/coverage/:id", coverageController.deleteCoverage);

// blog
router.post("/blog", blogController.createBlog);
router.get("/blog", blogController.getBlogs);
router.get("/blog/:id", blogController.getBlogById);
router.put("/blog/:id", blogController.updateBlog);
router.delete("/blog/:id", blogController.deleteBlog);

// item
router.post("/item", itemController.createItem);
router.get("/item", itemController.getItems);
router.get("/item/:id", itemController.getItemById);
router.put("/item/:id", itemController.updateItem);
router.delete("/item/:id", itemController.deleteItem);

// labor
router.get("/labor", laborController.getLabors)
router.post("/labor", laborController.createLabor);
router.delete("/labor/:id", laborController.deleteLabor);

module.exports = router;
