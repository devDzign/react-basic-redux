import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import logo from '../logo.svg';
import './App.css';
import Header from "../components/Header";
import Home from "../components/Home";
import Error from "../components/Error";
import Resources from "../components/Resources";
import RequiredAuthentication from "../helpers/requireAuthentification"
import Signin from "./Signin";

function App() {
  return (
    <Router>
        <Header/>

        <Switch>

            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/connexion">
                <Signin/>
            </Route>

            <Route exact path="/resources" component={RequiredAuthentication(Resources)} />

            <Route path="*">
                <Error/>
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
