import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Home from './pages/Home'

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Dynamically render page based on state
  const renderPage = () => {
    switch (activePage){
      case 'portfolio': return <Portfolio />;
      case 'contact': return <Contact />;
      case 'about': return <About />;
      default:  return <Home />;
    }
  };

  return (
    <>
      <div className="app-container">
        {/* Left menu*/}
        <Sidebar 
          activePage={activePage} 
          onChangePage={setActivePage}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
        
        {/* Right content */}
        <main className='content'> {renderPage()} </main>
      </div>
    </>
  );
}


