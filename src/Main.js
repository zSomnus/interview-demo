import React, { useState, useEffect } from 'react';
import MyCard from './MyCard';
import MyDrawer from './MyDrawer';

const Main = () => {
  const [visible, setVisible] = useState(false);
  let currentCardIndex = 0;

  const showDrawer = () => {
    setVisible(true);
    console.log(`Current card index: ${currentCardIndex}`);
  };

  let cardContent = {
    title: 'Custom Title',
    body: 'Custom body content',
    titleColor: '#000000',
    bodyColor: '#000000',
    panelColor: '#ffffff',
    panelRadius: 10,
  };

  let cards = [];

  const [cardMap, setCardMap] = useState([]);

  const setCurrentIndex = () => {
    console.log('index');
  };

  const updateCards = () => {
    let index = 0;
    console.log(`card length: ${cards.length}`);
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
    console.log(cards.length);
  };

  useEffect(() => {
    cards.push(cardContent);
    updateCards();
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {cardMap}
      {MyDrawer(onClose, visible)}
    </div>
  );
};

export default Main;
