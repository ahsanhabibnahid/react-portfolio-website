import React, { Component, Fragment } from 'react';
import {Switch,Route} from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import ServicePage from '../pages/ServicePage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/'>
                        <HomePage></HomePage>
                    </Route>

                    <Route exact path='/service'>
                        <ServicePage></ServicePage>
                    </Route>

                    <Route exact path='/course'>
                        <CoursesPage></CoursesPage>
                    </Route>

                    <Route exact path='/portfolio'>
                        <PortfolioPage></PortfolioPage>
                    </Route>

                    <Route exact path='/contact'>
                        <ContactPage></ContactPage>
                    </Route>
                    <Route exact path='/about'>
                        <AboutPage></AboutPage>
                    </Route>

                    
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;