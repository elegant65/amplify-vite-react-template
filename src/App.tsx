import React from "react";
import "./App.css"; // Import global styles
import { properties } from "./data/properties"; // Import properties data

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Rustic Eco Farms</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Find Your Dream Property</h2>
        <p>Discover stunning properties along the Delhi-Mumbai Expressway.</p>
      </section>

      {/* Properties Section */}
      <section id="properties">
        <h3>Featured Properties</h3>
        <div className="property-grid">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              <img src={property.image} alt={property.name} />
              <h4>{property.name}</h4>
              <p>{property.price}</p>
              <p>{property.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3>Contact Us</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message"></textarea>
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
*/

export default App;
