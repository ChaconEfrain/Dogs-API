const { Router } = require("express");
const Model = require("../Utils/dogsModel.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    await Model.getDogsFromAPI();
    await Model.getDogsFromDb();
    if (!name) return res.json(Model.getAllDogs());
    return res.json(Model.getDogsByQuery(name));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.json(Model.getDogByParams(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, height, weight, life_span, temperament } = req.body;
    const dog = await Model.createDog(name, height, weight, life_span);
    const temp = await Model.createTemperament(temperament);
    await dog.addTemperament(temp);
    return res.json(await Model.joinDogAndTemperament(name));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
