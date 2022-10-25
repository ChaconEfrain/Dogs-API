import s from "./Header.module.css";

const Header = () => {
  return (
    <nav className={s.navContainer}>
      <form className={s.inputContainer}>
        <input
          className={s.searchInput}
          type="text"
          placeholder="Search for any race..."
        />
      </form>
    </nav>
  );
};

export default Header;
