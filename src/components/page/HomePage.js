import React, { Fragment } from 'react'
import Catalog from '../Catalog.jsx';
import Header from '../Header.jsx'
import pizzaImg from "../img/pizza.png";

const HomePage = () => {
    return (
        <Fragment>
            <Header 
                pizzaImg={pizzaImg} 
                title={`Food delivery in Kovel`} 
                subTitle={<span>
                    If you decide to relax or have unexpected guests, 
                    call us. We make <br/> sure that your vacation is comfortable, 
                    enjoyable and delicious
                </span>}/>
            <Catalog/>
        </Fragment>
    )
}

export default HomePage