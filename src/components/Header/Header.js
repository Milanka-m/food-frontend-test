import React from 'react';
import { Route } from 'react-router-dom';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <Route exact path={["/", "/goods/sushi"]}>
      <header className="header">
        <div className="header__container">
          <Logo />
          <Navigation />
        </div>
      </header>
    </Route>
  );
}

export default Header;