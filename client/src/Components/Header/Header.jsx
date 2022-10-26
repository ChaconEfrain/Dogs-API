import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByQuery } from "../../redux/action-creators";
import s from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDogsByQuery(input));
    setInput("");
    document.querySelector("input").blur();
  };

  return (
    <nav className={s.navContainer}>
      <form onSubmit={handleSubmit} className={s.inputContainer}>
        <input
          className={s.searchInput}
          type="text"
          value={input}
          onChange={(e) => handleChange(e)}
          placeholder="Search for any race..."
        />
      </form>
    </nav>
  );
};

export default Header;
