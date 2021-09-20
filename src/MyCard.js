import React from 'react';
import { Card, Divider, Button, Row, Col } from 'antd';
import {
  EditTwoTone,
  CopyTwoTone,
  DeleteTwoTone,
  getTwoToneColor,
} from '@ant-design/icons';

const CardTitle = (
  card,
  editCard,
  duplicateCard,
  deleteCard,
  isDeletionIconDisabled
) => {
  return (
    <div className="card-title" style={{ display: 'flex' }}>
      <Row wrap={false} align="middle">
        <Col flex={2}>
          <h1 style={{ color: card.titleColor, fontSize: card.titleSize }}>
            {card.title}
          </h1>
        </Col>
        <Col flex={20}></Col>
        <Col style={{ textAlign: 'right' }} flex={2}>
          <Button
            type="link"
            icon={<EditTwoTone />}
            onClick={editCard}
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
  setCurrentIndex,
  cards,
  updateCardArray,
  showDrawer,
  updateCards,
  isDeletionIconDisabled
) => {
  const duplicateCard = () => {
    let clone = JSON.parse(JSON.stringify(cards[index]));
    cards.splice(index, 0, clone);
    updateCardArray(cards);
    updateCards();
  };

  const deleteCard = () => {
    cards.splice(index, 1);
    updateCardArray(cards);
    updateCards();
  };

  const editCard = () => {
    setCurrentIndex(index);
    showDrawer();
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
            cards[index],
            editCard,
            duplicateCard,
            deleteCard,
            isDeletionIconDisabled
          )}
          <Divider style={{ margin: 0 }} />
          <p
            style={{
              color: cards[index].bodyColor,
              fontSize: cards[index].bodySize,
            }}
          >
            {cards[index].body}
          </p>
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
