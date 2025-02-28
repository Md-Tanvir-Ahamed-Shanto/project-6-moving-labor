const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authControllers");

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

module.exports = router;
