import css from "./Header.module.css";

const Header = ({ name }) => {
  return <h2 className={css.Header}>{name}</h2>;
};

export default Header;
