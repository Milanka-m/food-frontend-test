import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sushi from '../Sushi/Sushi';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/goods/sushi">
            <Sushi />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
