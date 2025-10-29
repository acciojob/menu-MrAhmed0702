import React, { useState } from "react";
import data from "./data";

import '../styles/App.css';

const allCategories = ["all","breakfast","lunch","shakes"];

const App = () => { 
  const [menuItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = 
    activeCategory === "all" 
      ? menuItems 
      : menuItems.filter(item => item.category === activeCategory);

  return( 
    <main id="main">
      <section>
        <div className="title">
          <h2>Our Menu</h2>
        </div>

        <div className="btn-container">
          {allCategories.map((category, index) => (
            <button
              key={index}
              id={`filter-btn-${index}`} 
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="section-center">
        {filteredItems.map(item => (
          <article 
            key={item.id} 
            data-test-id={`menu-item-${item.category}`} 
            className={`menu-item menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">${item.price}</h4>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App;
