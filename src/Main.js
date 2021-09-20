import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import MyDrawer from './MyDrawer';

const Main = () => {
  const [visible, setVisible] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const showDrawer = () => {
    console.log(`Current Index: ${currentCardIndex}`);
    setVisible(true);
  };

  let cardContent = {
    title: 'Custom Title',
    body: 'Custom body content',
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
  const updateCards = () => {
    console.log(`From Main`);
    console.log([...cards]);
    let index = 0;
    let isDeletionDisabled = cards.length < 2;
    let newCardMap = cards.map(() => (
      <div key={index}>
        {MyCard(
          index++,
          setCurrentIndex,
          cards,
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
