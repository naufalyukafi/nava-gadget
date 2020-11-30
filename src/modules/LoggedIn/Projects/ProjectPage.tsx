import React from 'react';
import "./ProjectPage.css";
import { Layout, Typography, Row, Col, Input, Select, Button } from 'antd'
import NewCardList from './NewCardList';
import Categories from './Categories';
const { Search } = Input;
const { Option } = Select;

const ProjectPage = () => {

  const onSearch = () => console.log("coba");

  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: '#fff' }}>
        <Row align="middle" justify="space-around" >
          <Col>
            <Typography.Title level={4} style={{ fontWeight: 'bold' }}>Gadged Store</Typography.Title>
          </Col>
          <Col className="navbar-select">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a Language"
              optionFilterProp="children"
            >
              <Option value="indonesia">Indonesia</Option>
              <Option value="inggris">Inggris</Option>
            </Select>
          </Col>
          <Col className='navbar-search' >
            <Search placeholder="input search text" onSearch={onSearch} enterButton style={{ marginTop: 15, minWidth: 300 }} />
          </Col>
          <Col>
            <Button className="signup" type="primary" style={{ marginRight: 20 }}>DAFTAR</Button>
            <Button className="signin" type="primary">LOGIN</Button>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ padding: 50 }}>
        <Categories />
        <NewCardList />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: '#fff' }}>
        Create By Yukafi & Shifa
      </Layout.Footer>
    </Layout>
  );
};

export default ProjectPage;
