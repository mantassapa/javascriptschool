const express = require("express")
const router = express.Router()
const {protect} = require("../middlewares/authMiddleware")
const createAd = require("../controllers/adController")

router.route("/").post(protect, createAd)
module.exports = router
