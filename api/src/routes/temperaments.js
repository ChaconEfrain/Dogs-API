const { Router } = require("express");
const Model = require("../Utils/dogsModel.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    return res.json(await Model.getTemperaments());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
