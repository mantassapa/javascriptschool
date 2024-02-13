const express = require("express")
const router = express.Router()
const {protect} = require("../middlewares/authMiddleware")
const {createAd, getAllAds, deleteAd, updateAd} = require("../controllers/adController")

router.route("/").post(protect, createAd)
router.get("/", getAllAds)
router.delete("/:id", deleteAd)
router.put("/:id", updateAd)
module.exports = router
