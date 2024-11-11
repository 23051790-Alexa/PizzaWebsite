import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {
  return (
    <div className="header">
      <h1>Andy's Pizza Co.</h1>
    </div>
  );
}

function Pizza({ name, description, price, imgSrc }) {
  return (
    <div className="pizza">
      <img src={imgSrc} alt={`${name} pizza`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price}€</span>
    </div>
  );
}

function PizzaList() {
  const pizzas = [
    {
      name: 'Spinach Pizza',
      description: 'Tomato, mozzarella, spinach, and ricotta cheese',
      price: 10,
      imgSrc: 'pizzas/spinaci.jpg',
    },
    {
      name: 'Focaccia',
      description: 'Tomato, mozzarella, garlic, and rosemary',
      price: 8,
      imgSrc: 'pizzas/focaccia.jpg',
    },
    {
      name: 'Funghi Pizza',
      description: 'Tomato, mozzarella, mushrooms, and herbs',
      price: 9,
      imgSrc: 'pizzas/funghi.jpg',
    },
    {
      name: 'Margherita',
      description: 'Tomato, mozzarella, basil, and olive oil',
      price: 7,
      imgSrc: 'pizzas/margherita.jpg',
    },
    {
      name: 'Prosciutto Pizza',
      description: 'Tomato, mozzarella, prosciutto, and arugula',
      price: 12,
      imgSrc: 'pizzas/prosciutto.jpg',
    },
    {
      name: 'Salamino Pizza',
      description: 'Tomato, mozzarella, salami, and olives',
      price: 11,
      imgSrc: 'pizzas/salamino.jpg',
    }
  ];

  return (
    <div className="pizzas">
      {pizzas.map((pizza, index) => (
        <Pizza
          key={index}
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
          imgSrc={pizza.imgSrc}
        />
      ))}
    </div>
  );
}

function Order() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <div>
      {isOpen ? (
        <div>
          <p>We're currently open!</p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>Sorry, we're closed.</p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Order />
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <h2>Our Menu</h2>
      <PizzaList />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
