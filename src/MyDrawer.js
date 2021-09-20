import React, { useState } from 'react';
import { Divider, Drawer, Tabs, Form, Input, Row, Col } from 'antd';
import { SettingOutlined, FormatPainterOutlined } from '@ant-design/icons';
import ColorBlock from './ColorBlock';

const { TabPane } = Tabs;

let myTitleColor;

const SettingTab = () => {
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
        <Input placeholder="Enter custom title" />
      </Form.Item>
      <Form.Item
        name="bodyText"
        label="Body Text"
        style={{ fontWeight: 'bold' }}
      >
        <Input.TextArea rows={4} placeholder="Enter custom text" />
      </Form.Item>
    </Form>
  );
};

const StyleTab = (updateCard) => {
  const [titleColor, setTitleColor] = useState('yellow');
  const [bodyColor, setBodyColor] = useState('black');
  const [panelColor, setPanelColor] = useState('black');

  const onTitleColorChange = (e) => {
    console.log('onChange', e, e.hex);
    myTitleColor = e.hex;
    console.log(`Change title color ${myTitleColor}`);
    setTitleColor(e.hex);
    updateCard(e.hex);
  };

  const onBodyColorChange = (e) => {
    console.log('onChange', e, e.hex);
    setBodyColor(e.hex);
  };

  const onPanelColorChange = (e) => {
    console.log('onChange', e, e.hex);
    setPanelColor(e.hex);
  };

  return (
    <div style={{ margin: 24 }} layout="vertical">
      {/* Title */}

      <h2 style={{ color: 'skyblue' }}>Title</h2>
      <Row>
        <Col span={12}>
          <h3>Size</h3>
          <Input style={{ width: '80%' }} />
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
          <Input style={{ width: '80%' }} />
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
          <Input style={{ width: '80%' }} />
        </Col>
        <Col span={12} style={{ zIndex: 1000 }}>
          <h3>Color</h3>
          <ColorBlock color={panelColor} onChange={onPanelColorChange} />
        </Col>
      </Row>
    </div>
  );
};

const DrawerTabs = (updateCard) => {
  return (
    <Tabs defaultActiveKey="1" centered tabBarGutter={0}>
      <TabPane tab={<SettingOutlined style={{ fontSize: 20 }} />} key="1">
        {SettingTab(updateCard)}
      </TabPane>
      <TabPane tab={<FormatPainterOutlined style={{ fontSize: 20 }} />} key="2">
        {StyleTab(updateCard)}
      </TabPane>
    </Tabs>
  );
};

const MyDrawer = (currentIndex, cards, onClose, visible, updateCards) => {
  console.log(`In Dreawer`);
  console.log([...cards]);
  const updateCard = (titleColor) => {
    console.log(`Current Index: ${currentIndex}`);
    cards[currentIndex].titleColor = titleColor;
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
      {DrawerTabs(updateCard)}
    </Drawer>
  );
};

export default MyDrawer;
