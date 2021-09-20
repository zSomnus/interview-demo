import React from 'react';
import { Card, Divider, Button, Row, Col } from 'antd';
import {
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  getTwoToneColor,
} from '@ant-design/icons';

const CardTitle = (
  titleText,
  titleColor,
  showDrawer,
  duplicateCard,
  deleteCard,
  isDeletionIconDisabled
) => {
  return (
    <div className="card-title" style={{ display: 'flex' }}>
      <Row wrap={false} align="middle">
        <Col flex={2}>
          <h1 style={{ color: titleColor }}>{titleText}</h1>
        </Col>
        <Col flex={20}></Col>
        <Col style={{ textAlign: 'right' }} flex={2}>
          <Button
            type="link"
            icon={<EditTwoTone />}
            onClick={showDrawer}
          ></Button>
          <Button
            type="link"
            icon={<CopyTwoTone />}
            onClick={duplicateCard}
          ></Button>
          <Button
            type="link"
            icon={<DeleteTwoTone style={{ color: { getTwoToneColor } }} />}
            disabled={isDeletionIconDisabled}
            onClick={deleteCard}
          ></Button>
        </Col>
      </Row>
    </div>
  );
};

const MyCard = (
  index,
  cards,
  showDrawer,
  updateCards,
  isDeletionIconDisabled
) => {
  const duplicateCard = () => {
    cards.splice(index, 0, cards[index]);
    updateCards();
    console.log(cards);
    console.log(`Duplicate from index: ${index}`);
  };

  const deleteCard = () => {
    cards.splice(index, 1);
    updateCards();
    console.log(`Rrmove from index: ${index}`);
  };

  return (
    <Row justify="center">
      <Col span={20}>
        <Card
          className="cards"
          bodyStyle={{
            paddingTop: 0,
            paddingBottom: 0,
          }}
          style={{
            borderRadius: cards[index].panelRadius,
            backgroundColor: cards[index].panelColor,
          }}
        >
          {CardTitle(
            cards[index].title,
            cards[index].titleColor,
            showDrawer,
            duplicateCard,
            deleteCard,
            isDeletionIconDisabled
          )}
          <Divider style={{ margin: 0 }} />
          <p style={{ color: cards[index].bodyColor }}>{cards[index].body}</p>
          {`${isDeletionIconDisabled}`}
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
