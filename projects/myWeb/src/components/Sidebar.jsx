export default function Sidebar({ activePage, onChangePage }) {
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

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

        {/* Dark mode toggle */}
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </nav>
    </aside>
  );
}
