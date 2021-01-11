import React, { Fragment, useState } from 'react';
import "./App.scss";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Header.jsx';
import pizzaImg from "./img/pizza.png";
import Container from './Container.jsx';
import Navigation from './Navigation.jsx';

const App = () => {
    const [headerLink] = useState(
        [
            {
                name: "Payment",
                to: "/payment"
            },
            {
                name: "About us",
                to: "/aboutus"
            },
            {
                name: "Contacts",
                to: "/contacts"
            }
        ]
    )
    return (
        <Router>
            <Fragment>
                <Navigation linkData={headerLink} tel="0800330898" daily="Daily 11am - 9pm"/>
                <Header 
                    pizzaImg={pizzaImg} 
                    title={`Food delivery in Kovel`} 
                    subTitle={<span>
                        If you decide to relax or have unexpected guests, 
                        call us. We make <br/> sure that your vacation is comfortable, 
                        enjoyable and delicious
                    </span>}/>
            </Fragment>
        </Router>
    );
}

export default App;
