import React from 'react';
import {Link} from 'react-router-dom'
import "./Navigation.scss"
import Logo from './Logo.jsx';
import telephone from './img/telIcon.png'
import Container from './Container';
const Navigation = ({tel, daily, linkData}) => {

  const renderLink = (linkData) => {
    return linkData.map(({name,to}, id) => {
      return (
        <Link key={id} className="navigation-links__item" to={to}>{name}</Link>
      )
    })
  }

  return (
        <nav className="navigation">
            <Container>
                <div className="navigation-wrapper">
                  <div className="navigation-links">
                    {renderLink(linkData)}
                  </div>
                  <Logo/>
                  <div className="navigation-contacts">
                      <p className="navigation-contacts__works">{daily}</p>
                      <a href={`tel:${tel}`} className="navigation-contacts__telephone"><img src={telephone} alt="Icons"/>
                      0 800 33 08 98</a>
                  </div>
                </div>
            </Container>
        </nav>
  );
}

export default Navigation;
