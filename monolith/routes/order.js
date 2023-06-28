var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "get all the orders" });
});

router.post("/", (req, res) => {
  res.send({ message: "order Created" });
});

module.exports = router;
