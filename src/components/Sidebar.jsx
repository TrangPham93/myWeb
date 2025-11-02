import { FaSun, FaMoon } from "react-icons/fa";


export default function Sidebar({ activePage, onChangePage, darkMode, onToggleDarkMode }) {
  // const toggleDarkMode = () => {
  //   document.body.classList.toggle("dark");
  // };

  return (
    <aside className="sidebar">
      <h1 className="logo">Trang Pham</h1>
      <nav className="menu">
        <button
          className={activePage === "home" ? "active" : ""}
          onClick={() => onChangePage("home")}
        >
          Home
        </button>
        <button
          className={activePage === "about" ? "active" : ""}
          onClick={() => onChangePage("about")}
        >
          About Me
        </button>
        <button
          className={activePage === "portfolio" ? "active" : ""}
          onClick={() => onChangePage("portfolio")}
        >
          Portfolio
        </button>
        <button
          className={activePage === "contact" ? "active" : ""}
          onClick={() => onChangePage("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Dark mode toggle */}
      <button className="dark-mode-btn" onClick={onToggleDarkMode}>
        {darkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}
      </button>
    </aside>
  );
}
