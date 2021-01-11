import React, { Fragment, useState } from 'react';
import "./App.scss";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navigation from './Navigation.jsx';
import HomePage from './page/HomePage'

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
                <Switch>
                    <Route path="/home/" exact component={HomePage}/>
                </Switch>
            </Fragment>
        </Router>
    );
}

export default App;
