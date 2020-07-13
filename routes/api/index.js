const router = require("express").Router();
const musicRoutes = require("./music");

// Saved routes
router.use("/music", musicRoutes);

module.exports = router;
