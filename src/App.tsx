
//import { useState, useEffect } from 'react';
import './App.css';
//import { properties, Property } from './data/properties'; // Import properties
import logo from './assets/logo.jpg';
import villaimg from './assets/villa.jpg';
import apartmentimg from './assets/apartment.jpg';
import project3Img from './assets/project3.jpg';
import project4Img from './assets/project4.jpg';
import project5Img from './assets/project5.jpg';
import project6Img from './assets/project6.jpg';
import { useState } from 'react';
import whatsappIcon from './assets/whatsapp-icon.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper/modules";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const projects = [
    { id: 1, title: "Luxury Villa in Alwar", image: villaimg, description: "A stunning villa with ocean views and modern amenities" },
    { id: 2, title: "Modern Apartment in Alwar", image: apartmentimg, description: "A stylish apartment located in the heart of Alwar" },
    { id: 3, title: "Luxury Mansion in Alwar", image: project3Img, description: "Stunning Mansion on the outskirts of Alwar" },
    { id: 4, title: "Poolside Villa", image: project4Img, description: "Poolside Villa in the hills" },
    { id: 5, title: "Upcoming Farmhouse", image: project5Img, description: "Upcoming Farmhouse near Alwar" },
    { id: 6, title: "Small sized luxury Villa", image: project6Img, description: "Small sized luxury villa near Alwar" },
    
  ];
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Start closing animation
      setIsMenuOpen(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match the duration of the slideUp animation
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="App">
      {/* Navbar */}
      <section className="navbar">
        <div className="navbar-logo-card">
          <img className="navbar-logo" src = {logo} id = {projects[0].title}></img>
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? '⋀' : '☰'} {/* This is the menu icon */}
        </button>
        
        <ul className="navbar-links">
          <li><a href="#about">About Us</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="navbar-cta" href="tel:+91-8448342364">+91-8448342364</a>
      </section>

      {/* Expandible navbar for mobile */}
      <section className="navbar-expandible">
        <div className={`navbar-links-mobile ${isMenuOpen ? 'open' :  isAnimating ? 'closing' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
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
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={8}
          slidesPerView="auto"
          grabCursor={false}
          centeredSlides={false}
          loop={true}
          touchStartPreventDefault={false}
          touchMoveStopPropagation={false}
        
          navigation={true}
          className="projects-swiper"
         
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="project-slide" >     
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
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

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/8448342364" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat with us on WhatsApp"
      >
      <img src={whatsappIcon} alt="WhatsApp" />
      </a>
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
