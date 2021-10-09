import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import pinIcon from '../../images/pin-icon.svg';
import facebookIcon from '../../images/facebook-social-icon.svg';
import vkIcon from '../../images/vk-social-icon.svg';
import instagramIcon from '../../images/instagram-social-icon.svg';
import telegramIcon from '../../images/telegram-social-icon.svg';
import tiktokIcon from '../../images/tiktok-social-icon.svg';
import mastercardIcon from '../../images/master-card.svg';
import vizaIcon from '../../images/visa.svg';
import googlePlayIcon from '../../images/google-play.png';
import appStoreIcon from '../../images/app-store.png';

import './Footer.css';

function Footer() {
  return (
    <Route exact path={["/", "/goods/sushi"]}>
      <footer className="footer">
        <div className="footer__column">
          <ul className="footer__column-links">
            <li>
              <a 
                href="https://www.facebook.com/sushiveslarf" 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={facebookIcon} alt="иконка Фейсбук" />
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/sushiveslarf" 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={vkIcon} alt="иконка ВКонтакте" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com/sushivesla_rf/" 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={instagramIcon} alt="иконка Инстаграм" />
              </a>
            </li>
            <li>
              <a 
                href="https://t.me/sushivesla" 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={telegramIcon} alt="иконка Телеграм" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@sushivesla?" 
                className="footer__social-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__social-icon" src={tiktokIcon} alt="иконка ТикТок" />
              </a>
            </li>
            <li>
              <NavLink
                to="/goods/sushi" 
                className="footer__map-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  <img className="footer__map-icon" src={pinIcon} alt="иконка точка на карте" />
                  Ближайшие СушиВесла
              </NavLink>
            </li>
          </ul>

          <ul className="footer__column-navigation">
            <li className="footer__nav-item">
              <NavLink
                to="/goods/sushi" 
                className="footer__nav-link footer__nav-link_color_red" 
                target="_blank" 
                rel="noopener noreferrer">
                  Акции
             </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/goods/sushi" 
                className="footer__nav-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  Франшиза
             </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/goods/sushi" 
                className="footer__nav-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  Вакансии
             </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/goods/sushi" 
                className="footer__nav-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  Отзывы
             </NavLink>
            </li>
            <li className="footer__nav-item">
              <NavLink
                to="/goods/sushi" 
                className="footer__nav-link" 
                target="_blank" 
                rel="noopener noreferrer">
                  Политика обработки персональных данных
             </NavLink>
            </li>
          </ul>

          <div className="footer__column-pay">
            <ul className="footer__column-pay-list">
              <li>
                <img className="footer__mastercard-icon" src={mastercardIcon} alt="иконка MasterCard" />
              </li>
              <li>
                <img className="footer__viza-icon" src={vizaIcon} alt="иконка Viza" />
              </li>
            </ul>
            <ul className="footer__column-pay-list">
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ub.sushivesla.app&hl=ru" 
                  className="footer__app-link" 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <img className="footer__googleplay-icon" src={googlePlayIcon} alt="иконка Google Play" />
                </a>
              </li>
              <li>
                <a 
                  href="https://apps.apple.com/ru/app/%D1%81%D1%83%D1%88%D0%B8%D0%B2%D0%B5%D1%81%D0%BB%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B5%D0%B4%D1%8B/id982843002" 
                  className="footer__app-link" 
                  target="_blank" 
                  rel="noopener noreferrer">
                    <img className="footer__appstore-icon" src={appStoreIcon} alt="иконка App Store" />
                </a>
              </li>
            </ul>
          </div>
        </div> 
      </footer>
    </Route>
  );
}

export default Footer;