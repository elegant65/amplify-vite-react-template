
//import { useState, useEffect } from 'react';
import './App.css';
//import { properties, Property } from './data/properties'; // Import properties
import logo from './assets/logo.jpg';
import villaimg from './assets/villa.jpg';
import apartmentimg from './assets/apartment.jpg';
import { useState } from 'react';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
      {/* Navbar */}
      <section className="navbar">
        <div className="navbar-logo-card">
          <img className="navbar-logo" src = {logo}></img>
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          ☰ {/* This is the menu icon */}
        </button>
        <div className={`navbar-links-mobile ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="navbar-cta" href="tel:+91-8448342364">+91-8448342364</a>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Rustic Eco Farms</h1>
          <p>We offer farmhouses along Delhi Mumbai Expressway near Alwar</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Rustic Eco Farms offers serene countryside experiences close to city life. With sustainable practices and eco-friendly designs, we provide a perfect escape from urban chaos.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
              <img src = {villaimg}/>
              <h3>Luxury Villa</h3>
              <p>A peaceful retreat offering modern amenities in nature.</p>
          </div>
          <div className="project-card">
              <img src = {apartmentimg}/>
              <h3>Timber Plantations</h3>
              <p>A sustainable timber project for eco-conscious investors.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <p>© 2024 Rustic Eco Farms. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;




/*import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <main>
      <h1>Rustic Eco Farms Upcoming Website !!!!</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}


export default App;
*/
