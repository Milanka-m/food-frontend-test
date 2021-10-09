import React from "react";
import { NavLink } from "react-router-dom";
import pollsImageTablet from "../../../images/rolls_tablet.png";
import setsImageTablet from "../../../images/sets_tablet.png";
import sushiImageTablet from "../../../images/sushi_tablet.png";
import friedrollsImageTablet from "../../../images/fried_rolls_tablet.png";
import bakedrollsImageTablet from "../../../images/baked_rolls_tablet.png";
import soupsImageTablet from "../../../images/soups_tablet.png";
import tempuraImageTablet from "../../../images/tempura_tablet.png";
import './PromoMobile.css';

function PromoMobile() {
  return (
    <>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={pollsImageTablet} alt="роллы"/>
        <h3 className="promo__mobile-title">роллы</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={setsImageTablet} alt="сеты" />
        <h3 className="promo__mobile-title">сеты</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={sushiImageTablet} alt="суши" />
        <h3 className="promo__mobile-title">суши</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={tempuraImageTablet} alt="воки" />
        <h3 className="promo__mobile-title">воки</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={bakedrollsImageTablet} alt="запеченные роллы" />
        <h3 className="promo__mobile-title">запеченные роллы</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={friedrollsImageTablet} alt="жаренные роллы" />
        <h3 className="promo__mobile-title">жаренные роллы</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={soupsImageTablet} alt="супы" />
        <h3 className="promo__mobile-title">супы</h3>
      </NavLink>
      <NavLink className="promo__mobile-link" to="/goods/sushi" target="__blank" rel="noopener">
        <img className="promo__mobile-image" src={tempuraImageTablet} alt="темпура" />
        <h3 className="promo__mobile-title">темпура</h3>
      </NavLink>
    </>
  );
}

export default PromoMobile;