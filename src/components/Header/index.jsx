import styles from "./styles.module.css";
import logo_icon from "../../assets/icons/logo_icon.svg";

function Header() {
  return (
    <header>
      <img src={logo_icon} alt="logo_icon" />
      <nav>
        <a href="">Главная </a>
        <a href="">Музыка</a>
        <a href="">Сообщества</a>
        <a href="">Друзья</a>
      </nav>
    </header>
  );
}
export default Header;
