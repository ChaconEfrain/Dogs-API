import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getTemperaments, createDog } from "../../redux/action-creators";
import Model from ".";
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
  let tempText = document.getElementById("tempText");

  if (!temperaments.length) dispatch(getTemperaments());

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
      <form
        onSubmit={(e) =>
          Model.handleSubmit(
            e,
            errors,
            createDog,
            tempText,
            input,
            temperament,
            setInput,
            setErrors,
            setTemperament,
            setIsSubmited
          )
        }
        className={s.formContainer}
      >
        <div className={s.infoInput}>
          <div>
            <label htmlFor="raceInput">Race</label>
          </div>
          <input
            id="raceInput"
            className={errors.race && s.inputError}
            onChange={(e) =>
              Model.handleInput(
                e,
                setInput,
                setErrors,
                input,
                temperament,
                races
              )
            }
            name="race"
            type="text"
            value={input.race}
            placeholder="Race of your dog"
          />
        </div>
        <div className={s.numberInputs}>
          <div className={s.infoInput}>
            <label htmlFor="heightInput">Height {"(cm)"}</label>
            <div>
              <input
                id="heightInput"
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
                name="minHeight"
                className={`${s.numberInput} ${errors.height && s.inputError}`}
                type="number"
                value={input.minHeight}
                placeholder="Min"
              />
              <input
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
                name="maxHeight"
                className={`${s.numberInput} ${errors.height && s.inputError}`}
                type="number"
                value={input.maxHeight}
                placeholder="Max"
              />
            </div>
          </div>
          <div className={s.infoInput}>
            <label htmlFor="weightInput">Weight {"(Kg)"}</label>
            <div>
              <input
                id="weightInput"
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
                name="minWeight"
                className={`${s.numberInput} ${errors.weight && s.inputError}`}
                type="number"
                value={input.minWeight}
                placeholder="Min"
              />
              <input
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
                name="maxWeight"
                className={`${s.numberInput} ${errors.weight && s.inputError}`}
                type="number"
                value={input.maxWeight}
                placeholder="Max"
              />
            </div>
          </div>
          <div className={s.infoInput}>
            <label htmlFor="yearsInput">Life span {"(years)"}</label>
            <div>
              <input
                id="yearsInput"
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
                name="minYears"
                className={`${s.numberInput} ${errors.years && s.inputError}`}
                type="number"
                value={input.minYears}
                placeholder="Min"
              />
              <input
                onChange={(e) =>
                  Model.handleInput(
                    e,
                    setInput,
                    setErrors,
                    input,
                    temperament,
                    races
                  )
                }
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
              onClick={(e) =>
                Model.deleteTemperament(e, setTemperament, tempText)
              }
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
              onChange={() =>
                Model.displayTemperaments(
                  setTemperament,
                  setInput,
                  setErrors,
                  temperament,
                  tempText,
                  input,
                  races
                )
              }
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
