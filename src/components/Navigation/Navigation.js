import React from 'react';
import arrowIcon from '../../images/arrow-icon.svg';
import profileIcon from '../../images/profile-icon.svg';
import cashbackIcon from '../../images/egg.svg';
import basketIcon from '../../images/basket-icon.svg';
import './Navigation.css';
import { Switch, NavLink, Route } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';

function Navigation() {
  return (
    <>
      <Switch>
        <nav className="header__navigation">
          <Route exact path={["/", "/goods/sushi"]}>
            <div className="header__navigation-container">
              <NavBar />
              <ul className="header__links">
                <li>
                  <NavLink className="header__link-city" to="/goods/sushi" target="__blank" rel="noopener">Волгоград
                    <img className="header__link-city-arrow" src={arrowIcon} alt="изображение стрелки" />
                  </NavLink> 
                </li>
                <li>
                  <NavLink className="header__link-profile" to="/goods/sushi" target="__blank" rel="noopener">Личный кабинет
                    <img className="header__icon-profile" src={profileIcon} alt="изображение профиля" />
                  </NavLink>
                </li>
                <li><NavLink className="header__link-phone" to="/goods/sushi" target="__blank" rel="noopener">8-800-550-30-30</NavLink></li>
              </ul>
              <NavLink className="header__link-basket-mobile" to="/goods/sushi">
                <img className="header__icon-basket" src={basketIcon} alt="изображение корзины" />
              </NavLink>
            </div>
          </Route>

          <Route exact path="/goods/sushi">
            <ul className="header__links-goods">
              <li><NavLink className="header__link-goods" to="/goods/sushi" target="__blank" rel="noopener">Сеты</NavLink></li>
              <li><NavLink className="header__link-goods" to="/goods/sushi" target="__blank" rel="noopener">Онигири</NavLink></li>
              <li><NavLink className="header__link-goods" to="/goods/sushi" target="__blank" rel="noopener">Поке и салаты</NavLink></li>
              <li><NavLink className="header__link-goods" to="/goods/sushi" target="__blank" rel="noopener">Роллы</NavLink></li>
              <li><NavLink className="header__link-goods" to="/goods/sushi" target="__blank" rel="noopener">Ещё</NavLink></li>
            </ul>
          </Route>

          <Route exact path={["/", "/goods/sushi"]}>
            <div className="header__nav-container">
              <ul className="header__links-company">
                <li className="header__link-list"><NavLink className="header__link-item" to="/goods/sushi" target="__blank" rel="noopener">О компании</NavLink></li>
                <li className="header__link-list"><NavLink className="header__link-item" to="/goods/sushi" target="__blank" rel="noopener">Условия доставки</NavLink></li>
                <li className="header__link-list"><NavLink className="header__link-item" to="/goods/sushi" target="__blank" rel="noopener">Пользовательское соглашение</NavLink></li>
              </ul>
              <NavLink className="header__link-cashback" to="/goods/sushi">Икринки
                <img className="header__icon-cashback" src={cashbackIcon} alt="изображение икринки" />
              </NavLink>
              <NavLink className="header__link-basket" to="/goods/sushi">
                <img className="header__icon-basket" src={basketIcon} alt="изображение корзины" />
              </NavLink>
            </div>
          </Route>
        </nav>
      </Switch>
    </>
  );
}

export default Navigation;