import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, createDog } from "../../redux/action-creators";
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
    height: "Min height and max height required",
    weight: "Min weight and max weight required",
  });

  const [temperament, setTemperament] = useState("");
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
      errors.race = "Only letters allowed";
    else if (races.includes(input.race)) errors.race = "Race already exists";

    //Height validation
    if (!input.minHeight || !input.maxHeight)
      errors.height = "Min height and max height required";
    else if (
      !/^[0-9]*$/.test(input.minHeight) ||
      !/^[0-9]*$/.test(input.maxHeight)
    )
      errors.height = "Only numbers allowed";
    else if (input.minHeight > input.maxHeight)
      errors.height = "Min height has to be less than max height";

    //Weight validation
    if (!input.minWeight || !input.maxWeight)
      errors.weight = "Min weight and max weight required";
    else if (
      !/^[0-9]*$/.test(input.minWeight) ||
      !/^[0-9]*$/.test(input.maxWeight)
    )
      errors.weight = "Only numbers allowed";
    else if (input.minWeight > input.maxWeight)
      errors.weight = "Min weight has to be less than max weight";

    //Years validation
    if (!/^[0-9]*$/.test(input.minYears) || !/^[0-9]*$/.test(input.maxYears))
      errors.years = "Only numbers allowed";
    else if (input.minYears > input.maxYears)
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
    const submitBtn = document.getElementById("submitBtn");
    setInput({
      ...input,
      temperament,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    if (Object.keys(errors).length) submitBtn.disabled = true;
    else submitBtn.disabled = false;
  };

  //TODO: Fix "undefined" years output
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempText = document.getElementById("tempText");
    let lastTemp =
      tempText.innerHTML.split(", ")[tempText.innerHTML.split(", ").length - 1];
    console.log(input);
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
    tempText.innerHTML = "";
    setTemperament("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={s.formContainer}>
      <div className={s.infoInput}>
        <label htmlFor="">Race*</label>
        <input
          onChange={(e) => handleInput(e)}
          name="race"
          type="text"
          value={input.race}
          placeholder="Race of your dog"
        />
      </div>
      <div className={s.numberInputs}>
        <div className={s.infoInput}>
          <label htmlFor="">Height*</label>
          <div>
            <input
              onChange={(e) => handleInput(e)}
              name="minHeight"
              className={s.numberInput}
              type="number"
              value={input.minHeight}
              placeholder="Min"
            />
            <input
              onChange={(e) => handleInput(e)}
              name="maxHeight"
              className={s.numberInput}
              type="number"
              value={input.maxHeight}
              placeholder="Max"
            />
          </div>
        </div>
        <div className={s.infoInput}>
          <label htmlFor="">Weight*</label>
          <div>
            <input
              onChange={(e) => handleInput(e)}
              name="minWeight"
              className={s.numberInput}
              type="number"
              value={input.minWeight}
              placeholder="Min"
            />
            <input
              onChange={(e) => handleInput(e)}
              name="maxWeight"
              className={s.numberInput}
              type="number"
              value={input.maxWeight}
              placeholder="Max"
            />
          </div>
        </div>
        <div className={s.infoInput}>
          <label htmlFor="">Life span</label>
          <div>
            <input
              onChange={(e) => handleInput(e)}
              name="minYears"
              className={s.numberInput}
              type="number"
              value={input.minYears}
              placeholder="Min"
            />
            <input
              onChange={(e) => handleInput(e)}
              name="maxYears"
              className={s.numberInput}
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
          <div onClick={(e) => deleteTemperament(e)}>← Delete</div>
        </div>
        <div className={s.tempDiv}>
          <div className={s.tempContainer}>
            <span id="tempText">{temperament}</span>
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
      <input disabled id="submitBtn" type="submit" value="Create dog" />
    </form>
  );
};

export default CreateDog;
