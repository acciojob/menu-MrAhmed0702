import React, { useState } from "react";
import data from "./data";
import '../styles/App.css';

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
          <button 
            id="filter-btn-1" 
            className={activeCategory === "breakfast" ? "active" : ""}
            onClick={() => setActiveCategory("breakfast")}
          >
            Breakfast
          </button>
          <button 
            id="filter-btn-2" 
            className={activeCategory === "lunch" ? "active" : ""}
            onClick={() => setActiveCategory("lunch")}
          >
            Lunch
          </button>
          <button 
            id="filter-btn-3" 
            className={activeCategory === "shakes" ? "active" : ""}
            onClick={() => setActiveCategory("shakes")}
          >
            Shakes
          </button>
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
