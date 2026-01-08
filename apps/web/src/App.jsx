import { useState } from 'react';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import Pizza from './pages/Pizza.jsx';
import Burger from './pages/Burger.jsx';
import Biryani from './pages/Biryani.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const [tab, setTab] = useState('home');

  const views = {
    home: <Home />,
    recipes: <Recipes />,
    pizza: <Pizza />,
    burger: <Burger />,
    biryani: <Biryani />,
    about: <About />,
    contact: <Contact />
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Qtranz Recipes</h1>
      </header>

      <nav className="nav">
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('recipes')}>Recipes</button>
        <button onClick={() => setTab('pizza')}>Pizza</button>
        <button onClick={() => setTab('burger')}>Burger</button>
        <button onClick={() => setTab('biryani')}>Biryani</button>
        <button onClick={() => setTab('about')}>About</button>
        <button onClick={() => setTab('contact')}>Contact</button>
      </nav>

      <main className="page">
        {views[tab]}
      </main>

      <footer className="footer">
        © 2025 Qtranz — Eat. Enjoy. Repeat.
      </footer>
    </div>
  );
}
