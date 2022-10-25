import { NavLink } from "react-router-dom";
import s from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={s.container}>
      <div className={s.mainText}>
        <h1>Welcome to the Doggie-App</h1>
        <p>
          By clicking the button below you'll be able to look for any dog race
          along with it's main characteristics, have fun!
        </p>
      </div>
      <NavLink to="/home">
        <button className={s.beginBtn}>Click to begin</button>
      </NavLink>
    </div>
  );
};

export default Landing;
