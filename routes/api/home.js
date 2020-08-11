const router = require("express").Router();
const musicController = require("../../controllers/music");
const axios = require("axios");

router.route("/")
  // .get(musicController.findAll)
  // .post(musicController.create);

router
  .route("/:id")
  // .get(musicController.findById)
  // .put(musicController.update)
  // .delete(musicController.remove);

module.exports = router;