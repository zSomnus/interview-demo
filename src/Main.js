import React, { useState } from 'react';
import MyCard from './MyCard';
import MyDrawer from './MyDrawer';

const Main = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      {MyCard(showDrawer)}
      {MyDrawer(onClose, visible)}
    </div>
  );
};

export default Main;
