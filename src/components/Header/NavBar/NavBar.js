import React from 'react';
import { NavLink } from 'react-router-dom';
import profileIcon from '../../../images/profile-icon.svg';
import logoMobile from '../../../images/logo-phone.png';
import supyIconMenu from '../../../images/menu-phone-icon-supy.svg';
import sushiIconMenu from '../../../images/menu-phone-icon-sushi.svg';
import mapIconMenu from '../../../images/menu-phone-icon-1.svg';
import facebookIconMenu from '../../../images/menu-phone-social-icon-2.svg';
import vkIconMenu from '../../../images/menu-phone-social-icon-1.svg';
import telegramIconMenu from '../../../images/menu-phone-social-icon-5.svg';
import instagramIconMenu from '../../../images/menu-phone-social-icon-4.svg';
import tiktokIconMenu from '../../../images/menu-phone-social-icon-6.svg';
import googlePlayIcon from '../../../images/google-play.png';
import appStoreIcon from '../../../images/app-store.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="header__burger-menu">
      <input id="header__menu-toggle" type="checkbox" />
      <label className="header__menu-btn" htmlFor="header__menu-toggle">
        <span className="header__span"></span>
      </label>
      <div className="header__menu-container">
        <div className="header__menu-box">
          <ul className="header__heading">
            <li>
              <NavLink className="header__menu-link-logo" to="/">
                <img className="header__icon-logo" src={logoMobile} alt="логотип" />
              </NavLink>
            </li>
            <li>
            <NavLink className="header__link-profile-mobile" to="/">Личный кабинет
              <img className="header__icon-profile-mobile" src={profileIcon} alt="изображение профиля пользователя" />
            </NavLink>
            </li>
          </ul>
          <div className="header__menu-nav-links">
            <ul ul className="header__menu-list">
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Сеты
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Воки
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Роллы
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Premium
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Суши
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Напитки
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={supyIconMenu} alt="супы"/>
                  Разное
                </NavLink>
              </li>
            </ul>
            <ul className="header__menu-list">
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Онигири
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Поке и салаты
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Темпура
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Десерты
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Супы
                </NavLink>
              </li>
              <li>
                <NavLink className="header__menu-item" to="/goods/sushi">
                  <img className="header__menu-image" src={sushiIconMenu} alt="супы"/>
                  Соусы
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="header__menu-company-list">
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Выбрать город
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Акции
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Ближайшие СушиВесла
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Вакансии
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Отзывы
              </NavLink>
            </li>
            <li>
              <NavLink className="header__menu-item" to="/goods/sushi">
                <img className="header__menu-image" src={mapIconMenu} alt="иконка карты"/>
                Контакты
              </NavLink>
            </li>
          </ul>
          <ul className="header__menu-social-links">
            <li>
              <a
                href="https://vk.com/sushiveslarf" 
                className="header__menu-social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={vkIconMenu} alt="иконка ВКонтакте" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/sushiveslarf" 
                className="header__menu-social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={facebookIconMenu} alt="иконка Фейсбук" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/sushivesla_rf/" 
                className="header__menu-social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={instagramIconMenu} alt="иконка Инстаграм" />
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/sushivesla" 
                className="header__menu-social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={telegramIconMenu} alt="иконка Телеграм" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@sushivesla?" 
                className="header__menu-social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={tiktokIconMenu} alt="иконка ТикТок" />
              </a>
            </li>
          </ul>
          <ul className="header__menu-pay-links">
            <li>
              <a 
                href="https://play.google.com/store/apps/details?id=com.ub.sushivesla.app&hl=ru" 
                className="footer__app-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="header__googleplay-icon" src={googlePlayIcon} alt="иконка Google Play" />
              </a>
            </li>
            <li>
              <a 
                href="https://apps.apple.com/ru/app/%D1%81%D1%83%D1%88%D0%B8%D0%B2%D0%B5%D1%81%D0%BB%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B5%D0%B4%D1%8B/id982843002" 
                className="footer__app-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="header__appstore-icon" src={appStoreIcon} alt="иконка App Store" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;