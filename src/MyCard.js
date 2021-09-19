import React from 'react';
import { Card, Divider, Button, Row, Col } from 'antd';
import { EditTwoTone, CopyTwoTone, DeleteTwoTone } from '@ant-design/icons';
const CardTitle = (showDrawer) => {
  return (
    <div className="card-title" style={{ display: 'flex' }}>
      <Row wrap={false} align="middle">
        <Col flex={2}>
          <h1>Custom Title</h1>
        </Col>
        <Col flex={20}></Col>
        <Col style={{ textAlign: 'right' }} flex={2}>
          <Button
            type="link"
            icon={<EditTwoTone />}
            onClick={showDrawer}
          ></Button>
          <Button type="link" icon={<CopyTwoTone />}></Button>
          <Button type="link" disabled icon={<DeleteTwoTone />}></Button>
        </Col>
      </Row>
    </div>
  );
};

const MyCard = (showDrawer) => {
  return (
    <Row justify="center">
      <Col span={20}>
        <Card className="cards" bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}>
          {CardTitle(showDrawer)}
          <Divider style={{ margin: 0 }} />
          <p>Custom body text</p>
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
