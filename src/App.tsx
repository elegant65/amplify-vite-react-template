
import './App.css';
import { properties, Property } from './data/properties'; // Import properties

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slideshow every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">Rustic Eco Farms</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section id="home">
        <h1>Welcome to Rustic Eco Farms</h1>
        <p>Your dream properties along the Delhi-Mumbai Expressway.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Discover our exclusive range of farmhouses and luxury properties.</p>
      </section>

    

      <section id="gallery">
        <h2>Gallery</h2>
        <div className="gallery-slideshow">
          <button id="prev" onClick={prevSlide}>❮</button>
          <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {properties.map((property: Property) => (
              <div className="slide" key={property.id}>
                <img src={property.image} alt={property.name} />
                <p>{property.name}</p>
              </div>
            ))}
          </div>
          <button id="next" onClick={nextSlide}>❯</button>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
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
