import React from 'react';
import { NavLink } from 'react-router-dom';
import PromoMobile from './PromoMobile/PromoMobile';
import leafDesctop from '../../images/leaf_desktop.png';
import setsImageDesktop from '../../images/sets_desktop.png';
import rollsDesctop from '../../images/rolls_desktop.png';
import suchiDesktop from '../../images/sushi_desktop.png';
import friedRollsDesctop from '../../images/fried_rolls_desktop.png';
import bakedRollsDesctop from '../../images/baked_rolls_desktop.png';
import patternDesctop from '../../images/pattern_desktop.png';
import wokDesctop from '../../images/wok_desktop.png';
import soupsDesctop from '../../images/soups_desktop.png';
import tempuraDesctop from '../../images/tempura_desktop.png';
import baveragesDesctop from '../../images/beverages_desktop.png';
import wokTopLeafDesctop from '../../images/wok_top_leaf_desktop.png';
import soupPatternDesctop from '../../images/soup_pattern_desktop.png';

import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__leaf-img" src={leafDesctop} alt="лист"/>
        <div className="promo__item promo__item_color_blue">
          <NavLink className="promo__sets-link" to="/goods/sushi" target="__blank" rel="noopener">
            <img className="promo__sets-image" src={setsImageDesktop} alt="изображение сета" />
            <h3 className="promo__sets-title">Сеты</h3>
          </NavLink>
        </div>
        <div className="promo__item promo__item_color_red">
          <NavLink className="promo__rolls-sushi-link" to="/goods/sushi" target="__blank" rel="noopener">
            <img className="promo__rolls-img" src={rollsDesctop} alt="роллы" />
            <h3 className="promo__rolls-title">Роллы</h3>
          </NavLink>
          <NavLink className="promo__rolls-sushi-link" to="/goods/sushi" target="__blank" rel="noopener">
            <h3 className="promo__sushi-title">Суши</h3>
            <img className="promo__sushi-img" src={suchiDesktop} alt="суши" />
          </NavLink>
          <NavLink className="promo__rolls-sushi-link" to="/goods/sushi" target="__blank" rel="noopener">
            <img className="promo__fried-rolls-img" src={friedRollsDesctop} alt="жаренные роллы" />
            <h3 className="promo__fried-rolls-title">Жаренные роллы</h3>
          </NavLink>
          <NavLink className="promo__rolls-sushi-link" to="/goods/sushi" target="__blank" rel="noopener">
            <h3 className="promo__baked-rolls-title">Запеченные роллы</h3>
            <img className="promo__baked-rolls-img" src={bakedRollsDesctop} alt="запеченные роллы" />
          </NavLink>
          <img className="promo__pattern-img" src={patternDesctop} alt="паттерн" />
        </div>
        <div className="promo__item promo__item_color_white">
          <NavLink className="promo__wok-link" to="/goods/sushi" target="__blank" rel="noopener">
            <img className="promo__wok-leaf-img" src={wokTopLeafDesctop} alt="вок лист" />
            <div className="promo__wok-leaf-description">
              <h3 className="promo__wok-title">Вок<br/>конструк<br/>тор</h3>
              <p className="promo__wok-subtitle">Собери свой</p>
            </div>
            <img className="promo__wok-img" src={wokDesctop} alt="вок конструктор" />
          </NavLink>
        </div>
        <div className="promo__item promo__item_color_mix">
          <div className="promo__item-supy">
            <NavLink className="promo__item-supy-link" to="/goods/sushi" target="__blank" rel="noopener">
              <img className="promo__category-supy-img" src={soupsDesctop} alt="супы" />
              <div className="promo__item-supy-container">
                <h3 className="promo__sets-title promo__sets-title_position">Супы</h3>
                <img className="promo__item-supy-pattern" src={soupPatternDesctop} alt="лист" />
              </div>
            </NavLink>
          </div>
          <div className="promo__item-links">
            <NavLink className="promo__item-tempura-link" to="/goods/sushi" target="__blank" rel="noopener">
              <img className="promo__tempura-img" src={tempuraDesctop} alt="темпура" />
              <h3 className="promo__tempura-title promo__tempura-title_position">Темпура</h3>
            </NavLink>
            <NavLink className="promo__item-napitki-link" to="/goods/sushi" target="__blank" rel="noopener">
              <h3 className="promo__tempura-title promo__napitki-title_position">Напитки</h3>
              <img className="promo__napitki-img" src={baveragesDesctop} alt="напитки" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="promo__mobile">
        <PromoMobile />
      </div>
    </section>
  );
}

export default Promo;