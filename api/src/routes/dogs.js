const { Router } = require("express");
const { Temperament } = require("../db.js");
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
  //temperament debe tener la siguiente forma: Active, Playful, Stubborn
  try {
    const { name, height, weight, life_span, temperament } = req.body;
    const dog = await Model.createDog(name, height, weight, life_span);
    await Model.associateTemperaments(dog, temperament);
    return res.json(await Model.joinDogAndTemperament(name));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
