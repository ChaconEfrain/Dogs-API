const axios = require("axios");
const { Dog, Temperament } = require("../db.js");

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

let dogsFromAPI = [];
let dogsFromDb = [];
let allDogs = [];
let allTemperaments = [];

module.exports = {
  async getDogsFromAPI() {
    if (!dogsFromAPI.length) {
      const dogs = await axios.get(URL);
      dogsFromAPI = dogs.data.map((dog) => ({
        id: dog.id,
        image: dog.image.url,
        name: dog.name,
        temperament: dog.temperament || "N/A",
        weight: `${dog.weight.metric} Kg`,
        height: `${dog.height.metric} cm`,
        life_span: dog.life_span,
      }));
    }
    return dogsFromAPI;
  },

  async getDogsFromDb() {
    dogsFromDb = await Dog.findAll({
      include: {
        model: Temperament,
        as: "temperament",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return dogsFromDb;
  },

  getAllDogs() {
    allDogs = [...dogsFromAPI, ...dogsFromDb];
    return allDogs;
  },

  async getTemperaments() {
    allTemperaments = dogsFromAPI.map((dog) => {
      if (dog.temperament) return dog.temperament.split(", ");
    });
    let temperaments = allTemperaments.flat().sort();
    let uniqueTemperaments = new Set(temperaments);
    let uniqueTemperamentsArray = [...uniqueTemperaments];
    const tempsToCreate = uniqueTemperamentsArray.map((temp) => ({
      name: temp,
    }));
    await Temperament.bulkCreate(tempsToCreate);
    uniqueTemperamentsArray.pop();
    return uniqueTemperamentsArray;
  },

  getDogsByQuery(name) {
    const dogs = allDogs.filter((dog) =>
      dog.name.toLowerCase().includes(decodeURI(name).toLowerCase())
    );
    if (dogs.length) return dogs;
    throw new Error("The dog doesn't exist");
  },

  getDogByParams(id) {
    const dog = allDogs.find((dogEl) => dogEl.id.toString() === id);
    return dog;
  },

  async createDog(
    race,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    minYears,
    maxYears
  ) {
    if (!race || !minHeight || !maxHeight || !minWeight || !maxWeight)
      throw new Error("Missing necessary information");
    const newDog = await Dog.create({
      name: race,
      height: `${minHeight} - ${maxHeight} cm`,
      weight: `${minWeight} - ${maxWeight} Kg`,
      life_span: `${minYears} - ${maxYears} years`,
    });
    return newDog;
  },

  async associateTemperaments(dog, temperament) {
    let temps = temperament.split(", ");
    for (const temp of temps) {
      await dog.addTemperament(
        await Temperament.findOne({ where: { name: temp } })
      );
    }
  },

  async joinDogAndTemperament(name) {
    const newDog = await Dog.findAll({
      where: {
        name,
      },
      include: {
        model: Temperament,
        as: "temperament",
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return newDog;
  },
};
