import React from 'react';
import Container from './Container.jsx';
import "./Header.scss"
const Header = ({pizzaImg, title, subTitle}) => {
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    <h1 className="header-title">{title}</h1>
                    <h2 className="header-subtitle">{subTitle}</h2>
                    <div className="header-pizza">
                        <img src={pizzaImg} alt="Pizza Img"/>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
