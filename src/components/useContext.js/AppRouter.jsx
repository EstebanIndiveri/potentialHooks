import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from 'react-router-dom';
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import NavBar from './NavBar';
const AppRouter = () => {
    return ( 
        <Router>
            <Fragment>
                <NavBar/>
                <Switch>
                    <Route exact path="/about" component={AboutScreen}/>
                    <Route exact path="/login" component={LoginScreen}/>
                    <Route exact path="/" component={HomeScreen}/>
                </Switch>
            </Fragment>
        </Router>
     );
}
 
export default AppRouter;