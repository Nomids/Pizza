import React, { useState } from 'react';
import Container from './Container.jsx';
import "./Catalog.scss"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CatalogBlock from './CatalogBlock';

const Catalog = () => {
    const [pizzaData] = useState([
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"},
        {img:"", ingradiends: "Dough, Mozzarella, Cheddar, Blue, Parmesan", name: "Quattro formaggi", diametr: "32", price: "119"}
    ])
    const [drinksData] = useState([

    ])
    const [saladData] = useState([

    ])
    const [dessertData] = useState([

    ])
    const [sushiData] = useState([
    ])
    const [listName] = useState([
        {text:"Pizza", to: "/home/pizza", itemBlockData: pizzaData},
        {text:"Sushi", to: "/home/sushi", itemBlockData: sushiData},
        {text:"Salad", to: "/home/salat", itemBlockData: saladData},
        {text:"Dessert", to: "/home/dessert", itemBlockData: dessertData},
        {text:"Drinks", to: "/home/drinks", itemBlockData: drinksData}
    ])


    const renderList = () => {
        return listName.map(({text, to}, id) => {
            return (
                <Link to={to} key={id } className="catalog-lists__item">
                   {text}             
                </Link>
            )
        })
    }

    const renderRoute = () => {
        return listName.map(({to, itemBlockData})=>{
            return (
                <Route path={to} exact render={() => (<CatalogBlock itemData={itemBlockData}/>)}/>
            )
        })
    }

    return (
        <section className="catalog">
            <Container>
                <h2 className="section-title">Popular dishes</h2>
                <Router>
                    <div className="catalog-wrapper">
                        <div className="catalog-lists">
                            {renderList()}
                        </div>
                        <Switch>
                            {renderRoute()}
                        </Switch>
                    </div>
                </Router>
            </Container>
        </section>
    );
}

export default Catalog;
