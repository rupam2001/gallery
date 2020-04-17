const express = require("express");
const router = express.Router();
const Chat = require("../models/Chat");

router.get("/", async (req, res) => {
 res.send("Route working fine");
});


module.exports = router;
