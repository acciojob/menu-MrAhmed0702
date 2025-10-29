import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu"

import '../styles/App.css';

const allCategories = ["all","breakfast","lunch","shakes"]

const App = () => {

    const [menuItems,setMenuItems] = useState(items)
    const [categories,setCategories] = useState(allCategories)


    const filterItems = (categoryName) => {
        if(categoryName === "all"){
            setMenuItems(items)
        }else{
            const newItems = items.filter((item)=>item.category===categoryName)
            setMenuItems(newItems)
        }
    }
    return(
        <main id="main">
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>    
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Menu items={menuItems} />
            </section>
        </main>
    )

}

export default App;
