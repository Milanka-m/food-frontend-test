import React from 'react'; 
import { NavLink } from 'react-router-dom';
import './Card.css';
import iconRuble from '../../images/ruble-icon.svg';

function Card({ card }) { 
  const { name, image, constituent, weight, price } = card;

  return ( 
    <li>
      <NavLink className="elements__card" to="/goods/sushi" target="__self" rel="noopener">
        <img className="elements__card-image" src={image} alt={name} />
        <div className="elements__label"> 
          <div className="elements__description">
            <h2 className="elements__title">{name}</h2>
            <p className="elements__subtitle">{constituent}</p>
            <span className="elements__subtitle">{weight} г.</span>
          </div>
          <div className="elements__controls-price">
            <p className="elements__price">{price}
              <img className="elements__ruble-icon" src={iconRuble} alt="рубль"/>
            </p>
            <button className="elements__button">В корзину</button>
          </div>
        </div> 
      </NavLink> 
    </li>
  ) 
} 
 
export default Card; 