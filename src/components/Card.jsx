import React from 'react';
import pizza from './img/pizzaImg.png'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import "./Card.scss"

const Card = ({img, name, ingradiends, diametr, price}) => {
    const diametrs = diametr ? <div className="card-sise">32cm</div> : null

    return (
        <div className="card">
            <div className="card-img">
                <img src={pizza} alt=""/>
            </div>
            <div className="card-top-text">
                <div className="card-name">{name}</div>
                {diametrs}
            </div>
            <div className="card-ingradiends">
                {ingradiends}
            </div>
            <div className="card-price">
                {price} UAH
            </div>
            <button className="card-add">
                <ShoppingBasketIcon/>
            </button>
        </div>
    )
}

export default Card