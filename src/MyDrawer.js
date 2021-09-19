import React from 'react';
import { Divider, Drawer, Tabs, Form, Input } from 'antd';
import { SettingOutlined, FormatPainterOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

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

const StyleTab = () => {
  return (
    <Form style={{ margin: 24 }} layout="vertical" hideRequiredMark>
      <p>Title</p>
      <Form.Item name="titleSize" label="Size" style={{ fontWeight: 'bold' }}>
        <Input style={{ width: '50%' }} />
      </Form.Item>
      <Divider />
      <p>Body</p>
      <Form.Item name="bodySize" label="Size" style={{ fontWeight: 'bold' }}>
        <Input style={{ width: '50%' }} />
      </Form.Item>
      <Divider />
      <p>Panel</p>
      <Form.Item
        name="cornerRadius"
        label="Corner Radius"
        style={{ fontWeight: 'bold' }}
      >
        <Input style={{ width: '50%' }} />
      </Form.Item>
    </Form>
  );
};

const DrawerTabs = () => {
  return (
    <Tabs defaultActiveKey="1" centered tabBarGutter={0}>
      <TabPane tab={<SettingOutlined style={{ fontSize: 20 }} />} key="1">
        {SettingTab()}
      </TabPane>
      <TabPane tab={<FormatPainterOutlined style={{ fontSize: 20 }} />} key="2">
        {StyleTab()}
      </TabPane>
    </Tabs>
  );
};

const MyDrawer = (onClose, visible) => {
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
      {DrawerTabs()}
    </Drawer>
  );
};

export default MyDrawer;
