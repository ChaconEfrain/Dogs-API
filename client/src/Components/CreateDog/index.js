const Model = {
  validateForm(input, races) {
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
  },

  displayTemperaments(
    setTemperament,
    setInput,
    setErrors,
    temperament,
    tempText,
    input,
    races
  ) {
    const tempOption = document.getElementById("tempOptions");
    const tempSelected = tempOption.value;
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
      temperament,
    });
    setErrors(Model.validateForm({ ...input, temperament }, races));
    tempText.innerHTML = temperament;
  },

  deleteTemperament(e, setTemperament, tempText) {
    e.preventDefault();
    const tempTextArr = tempText.innerHTML.split(",");
    const newTempText = tempTextArr
      .filter((temp) => temp !== tempTextArr[tempTextArr.length - 1])
      .join(",");
    setTemperament(newTempText);
  },

  handleInput(e, setInput, setErrors, input, temperament, races) {
    setInput({
      ...input,
      temperament,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Model.validateForm(
        {
          ...input,
          temperament,
          [e.target.name]: e.target.value,
        },
        races
      )
    );
  },

  handleSubmit(
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
  ) {
    e.preventDefault();
    if (Object.keys(errors).length) return;
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
  },
};

export default Model;
