import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import MyDrawer from './MyDrawer';

const Main = () => {
  const [visible, setVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showDrawer = () => {
    setVisible(true);
  };

  let cardContent = {
    title: 'Custom Title',
    titleSize: 28,
    body: 'Custom body content',
    bodySize: 14,
    titleColor: '#000000',
    bodyColor: '#000000',
    panelColor: '#ffffff',
    panelRadius: 10,
  };

  const [cards, setCards] = useState([cardContent]);
  const [cardMap, setCardMap] = useState([]);

  const setCurrentIndex = (index) => {
    setCurrentCardIndex(index);
  };
  const updateCardArray = (cards) => {
    setCards(cards);
  };
  const updateCards = () => {
    let index = 0;
    let isDeletionDisabled = cards.length < 2;
    let newCardMap = cards.map(() => (
      <div key={index}>
        {MyCard(
          index++,
          setCurrentIndex,
          cards,
          updateCardArray,
          showDrawer,
          updateCards,
          isDeletionDisabled
        )}
      </div>
    ));
    setCardMap([...newCardMap]);
  };

  useEffect(() => {
    updateCards();
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {cardMap}
      {MyDrawer(currentCardIndex, cards, onClose, visible, updateCards)}
    </div>
  );
};

export default Main;
