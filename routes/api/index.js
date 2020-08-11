const router = require("express").Router();
const home = require("./home");
const musicRoutes = require("./music");
const profileRoutes = require("./profile");

// Saved routes
router.use("/", home);
router.use("/music", musicRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
