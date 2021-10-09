import React from 'react';
import GoodsCardList from '../GoodsCardList/GoodsCardList';
import cardsJsonData from "../../utils/sushi.json";

function Sushi() {
  const cards = cardsJsonData.goods.element;
  const nameCategorie = cardsJsonData.goods.name;

  return (
    <main className="content">
      {cards.length > 0 ? (
        <GoodsCardList 
          initialCards={cards}
          categorie={nameCategorie}
        />
      ) : (
        <></> 
      )}
    </main>
  );
}

export default Sushi;