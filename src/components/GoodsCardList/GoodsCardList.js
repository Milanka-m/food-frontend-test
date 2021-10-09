import React from 'react';
import './GoodsCardList.css';
import Card from '../Card/Card';

function GoodsCardList({ initialCards, categorie }) {
  return (
    <section className="elements">
      <h2 className="elements__categorie">{categorie}</h2>
      <ul className="elements__container">
        {initialCards.map(card => { 
            return ( 
              <Card card={card}
              key={card.id} /> 
            ) 
          })}
      </ul>  
    </section> 
  );
}

export default GoodsCardList;