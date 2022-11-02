import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getTemperaments,
  createDog,
  resetArrays,
  getAllDogs,
} from "../../redux/action-creators";
import s from "./CreateDog.module.css";

const CreateDog = () => {
  const [input, setInput] = useState({
    race: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minYears: "",
    maxYears: "",
    temperament: "",
  });

  const [errors, setErrors] = useState({
    race: "Race is required",
    height: "Min height and max height are required",
    weight: "Min weight and max weight are required",
    years: "Min years and max years are required",
  });

  const [temperament, setTemperament] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.allDogs);
  const races = dogs.map((dog) => dog.name);

  if (!temperaments.length) dispatch(getTemperaments());

  const validateForm = (input) => {
    let errors = {};

    //Race validation
    if (!input.race) errors.race = "Race is required";
    else if (!/^[A-Za-z\s]*$/.test(input.race))
      errors.race = "Only letters allowed in race";
    else if (races.includes(input.race)) errors.race = "Race already exists";
    //Height validation
    if (!input.minHeight || !input.maxHeight)
      errors.height = "Min height and max height are required";
    else if (
      !/^[0-9]*$/.test(input.minHeight) ||
      !/^[0-9]*$/.test(input.maxHeight)
    )
      errors.height = "Only positive numbers allowed in height";
    else if (input.minHeight >= input.maxHeight)
      errors.height = "Min height has to be less than max height";
    //Weight validation
    if (!input.minWeight || !input.maxWeight)
      errors.weight = "Min weight and max weight are required";
    else if (
      !/^[0-9]*$/.test(input.minWeight) ||
      !/^[0-9]*$/.test(input.maxWeight)
    )
      errors.weight = "Only positive numbers allowed in weight";
    else if (input.minWeight >= input.maxWeight)
      errors.weight = "Min weight has to be less than max weight";
    //Years validation
    if (!input.minYears || !input.maxYears)
      errors.years = "Min years and max years are required";
    else if (
      !/^[0-9]*$/.test(input.minYears) ||
      !/^[0-9]*$/.test(input.maxYears)
    )
      errors.years = "Only positive numbers allowed in years";
    else if (input.minYears >= input.maxYears)
      errors.years = "Min years has to be less than max years";

    return errors;
  };

  const displayTemperaments = () => {
    const tempOption = document.getElementById("tempOptions");
    const tempSelected = tempOption.value;
    const tempText = document.getElementById("tempText");
    if (
      tempText.innerHTML.includes(tempSelected) ||
      tempText.innerHTML.split(",").length === 5
    )
      return;
    setTemperament(
      (temp) =>
        (temp +=
          temp.split("").length > 1 ? `, ${tempSelected}` : `${tempSelected}`)
    );
    setInput({
      ...input,
      temperament: temperament,
    });
    setErrors(validateForm({ ...input, temperament }));
    tempText.innerHTML = temperament;
  };

  const deleteTemperament = (e) => {
    e.preventDefault();
    const tempText = document.getElementById("tempText");
    const tempTextArr = tempText.innerHTML.split(",");
    const newTempText = tempTextArr
      .filter((temp) => temp !== tempTextArr[tempTextArr.length - 1])
      .join(",");
    console.log(newTempText);
    setTemperament(newTempText);
  };

  const handleInput = (e) => {
    setInput({
      ...input,
      temperament,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        temperament,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length) return;
    const tempText = document.getElementById("tempText");
    const tempTextArray = tempText.innerHTML.split(", ");
    const lastTemp = tempTextArray[tempTextArray.length - 1];
    createDog({ ...input, temperament: `${temperament}, ${lastTemp}` });
    setInput({
      race: "",
      minHeight: "",
      maxHeight: "",
      minWeight: "",
      maxWeight: "",
      minYears: "",
      maxYears: "",
      temperament: "",
    });
    setErrors({
      race: "Race is required",
      height: "Min height and max height are required",
      weight: "Min weight and max weight are required",
      years: "Min years and max years are required",
    });
    tempText.innerHTML = "";
    setTemperament("");
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, 2500);
    dispatch(getAllDogs());
  };

  return (
    <div className={s.mainContainer}>
      <NavLink className={s.link} to="/home">
        <button className={s.homeBtn}>Home</button>
      </NavLink>
      <h1>Fill the info to create a new dog</h1>
      {isSubmited && (
        <div className={s.overlay}>
          <div className={s.submitNotice}>
            <p>Dog created succesfully!</p>
          </div>
        </div>
      )}
      <form onSubmit={(e) => handleSubmit(e)} className={s.formContainer}>
        <div className={s.infoInput}>
          <div>
            <label htmlFor="raceInput">Race</label>
          </div>
          <input
            id="raceInput"
            className={errors.race && s.inputError}
            onChange={(e) => handleInput(e)}
            name="race"
            type="text"
            value={input.race}
            placeholder="Race of your dog"
          />
        </div>
        <div className={s.numberInputs}>
          <div className={s.infoInput}>
            <label htmlFor="heightInput">Height</label>
            <div>
              <input
                id="heightInput"
                onChange={(e) => handleInput(e)}
                name="minHeight"
                className={`${s.numberInput} ${errors.height && s.inputError}`}
                type="number"
                value={input.minHeight}
                placeholder="Min"
              />
              <input
                onChange={(e) => handleInput(e)}
                name="maxHeight"
                className={`${s.numberInput} ${errors.height && s.inputError}`}
                type="number"
                value={input.maxHeight}
                placeholder="Max"
              />
            </div>
          </div>
          <div className={s.infoInput}>
            <label htmlFor="weightInput">Weight</label>
            <div>
              <input
                id="weightInput"
                onChange={(e) => handleInput(e)}
                name="minWeight"
                className={`${s.numberInput} ${errors.weight && s.inputError}`}
                type="number"
                value={input.minWeight}
                placeholder="Min"
              />
              <input
                onChange={(e) => handleInput(e)}
                name="maxWeight"
                className={`${s.numberInput} ${errors.weight && s.inputError}`}
                type="number"
                value={input.maxWeight}
                placeholder="Max"
              />
            </div>
          </div>
          <div className={s.infoInput}>
            <label htmlFor="yearsInput">Life span</label>
            <div>
              <input
                id="yearsInput"
                onChange={(e) => handleInput(e)}
                name="minYears"
                className={`${s.numberInput} ${errors.years && s.inputError}`}
                type="number"
                value={input.minYears}
                placeholder="Min"
              />
              <input
                onChange={(e) => handleInput(e)}
                name="maxYears"
                className={`${s.numberInput} ${errors.years && s.inputError}`}
                type="number"
                value={input.maxYears}
                placeholder="Max"
              />
            </div>
          </div>
        </div>
        <div className={s.infoInput}>
          <div className={s.tempDivLabel}>
            <label htmlFor="">Select up to 5 temperaments</label>
            <div
              className={s.deleteTempBtn}
              onClick={(e) => deleteTemperament(e)}
            >
              Delete
            </div>
          </div>
          <div className={s.tempDiv}>
            <div className={s.tempContainer}>
              <span id="tempText" className={s.selectedTemps}>
                {temperament}
              </span>
            </div>
            <select
              onChange={displayTemperaments}
              multiple
              size="5"
              id="tempOptions"
            >
              {temperaments &&
                temperaments.map((temp) => (
                  <option key={temp} value={temp}>
                    {temp}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <input className={s.submitBtn} type="submit" value="Create dog" />
      </form>

      {Object.keys(errors) && (
        <ul className={s.errorsList}>
          {Object.keys(errors).map((error) => (
            <li key={errors[error]}>{errors[error]}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateDog;
