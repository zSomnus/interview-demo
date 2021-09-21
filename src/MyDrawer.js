import React, { useState } from 'react';
import { Divider, Drawer, Tabs, Form, Input, Row, Col } from 'antd';
import { SettingOutlined, FormatPainterOutlined } from '@ant-design/icons';
import ColorBlock from './ColorBlock';

const { TabPane } = Tabs;

const SettingTab = (card, updateCard) => {
  const onTitleChange = (e) => {
    card.title = e.target.value;
    updateCard();
  };

  const onBodyChange = (e) => {
    card.body = e.target.value;
    updateCard();
  };

  return (
    <Form
      layout="vertical"
      hideRequiredMark
      style={{ marginLeft: 24, marginRight: 5 }}
    >
      <Form.Item
        name="titleText"
        label="Title Text"
        style={{ fontWeight: 'bold' }}
      >
        <Input
          placeholder="Enter custom title"
          onChange={onTitleChange}
        />
      </Form.Item>
      <Form.Item
        name="bodyText"
        label="Body Text"
        style={{ fontWeight: 'bold' }}
      >
        <Input.TextArea
          rows={4}
          placeholder="Enter custom text"
          onChange={onBodyChange}
        />
      </Form.Item>
    </Form>
  );
};

const StyleTab = (card, updateCard) => {
  const [titleColor, setTitleColor] = useState(card.titleColor);
  const [bodyColor, setBodyColor] = useState(card.bodyColor);
  const [panelColor, setPanelColor] = useState(card.panelColor);

  const onTitleColorChange = (e) => {
    console.log('onChange', e, e.hex);
    setTitleColor(e.hex);
    card.titleColor = e.hex;
    updateCard();
  };

  const onTitleSizeChange = (e) => {
    if (e.key === 'Enter') {
      card.titleSize = e.target.value;
      console.log(`update card`);
      updateCard();
    }
  };

  const onBodyColorChange = (e) => {
    console.log('onChange', e, e.hex);
    setBodyColor(e.hex);
    card.bodyColor = e.hex;
    updateCard();
  };

  const onBodySizeChange = (e) => {
    if (e.key === 'Enter') {
      card.bodySize = e.target.value;
      updateCard();
    }
  };

  const onPanelRadiusChange = (e) => {
    if (e.key === 'Enter') {
      console.log('radius change');
      card.panelRadius = parseInt(e.target.value);
      updateCard();
    }
  };

  const onPanelColorChange = (e) => {
    console.log('onChange', e, e.hex);
    setPanelColor(e.hex);
    card.panelColor = e.hex;
    updateCard();
  };

  return (
    <div style={{ margin: 24 }} layout="vertical">
      {/* Title */}

      <h2 style={{ color: 'skyblue' }}>Title</h2>
      <Row>
        <Col span={12}>
          <h3>Size</h3>
          <Input
            style={{ width: '80%' }}
            onKeyPress={onTitleSizeChange}
          />
        </Col>
        <Col span={12} style={{ zIndex: 1002 }}>
          <h3>Color</h3>
          <ColorBlock color={titleColor} onChange={onTitleColorChange} />
        </Col>
      </Row>
      <Divider />

      {/* Body */}

      <h2 style={{ color: 'skyblue' }}>Body</h2>
      <Row>
        <Col span={12}>
          <h3>Size</h3>
          <Input
            style={{ width: '80%' }}
            onKeyPress={onBodySizeChange}
          />
        </Col>
        <Col span={12} style={{ zIndex: 1001 }}>
          <h3>Color</h3>
          <ColorBlock color={bodyColor} onChange={onBodyColorChange} />
        </Col>
      </Row>
      <Divider />

      {/* Panel */}

      <h2 style={{ color: 'skyblue' }}>Panel</h2>
      <Row style={{ height: 1000 }}>
        <Col span={12}>
          <h3>Corner Radius</h3>
          <Input
            style={{ width: '80%' }}
            onKeyPress={onPanelRadiusChange}
          />
        </Col>
        <Col span={12} style={{ zIndex: 1000 }}>
          <h3>Color</h3>
          <ColorBlock color={panelColor} onChange={onPanelColorChange} />
        </Col>
      </Row>
    </div>
  );
};

const DrawerTabs = (card, updateCard) => {
  return (
    <Tabs defaultActiveKey="1" centered tabBarGutter={0}>
      <TabPane tab={<SettingOutlined style={{ fontSize: 20 }} />} key="1">
        {SettingTab(card, updateCard)}
      </TabPane>
      <TabPane tab={<FormatPainterOutlined style={{ fontSize: 20 }} />} key="2">
        {StyleTab(card, updateCard)}
      </TabPane>
    </Tabs>
  );
};

const MyDrawer = (currentIndex, cards, onClose, visible, updateCards) => {
  let tempCard = { ...cards[currentIndex] };
  const updateCard = () => {
    cards[currentIndex] = tempCard;
    console.log(cards[currentIndex]);
    updateCards();
  };

  return (
    <Drawer
      className="drawer"
      width={300}
      placement="right"
      maskStyle={{ backgroundColor: 'transparent' }}
      //bodyStyle padding: 24
      bodyStyle={{ padding: 0 }}
      contentWrapperStyle={{ borderTopLeftRadius: 20 }}
      onClose={onClose}
      visible={visible}
      closable={false}
    >
      {DrawerTabs(tempCard, updateCard)}
    </Drawer>
  );
};

export default MyDrawer;
