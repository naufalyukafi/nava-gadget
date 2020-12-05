import React from 'react';
import "./ProjectPage.css";
import { Layout, Typography, Row, Col, Input, Select, Button, message, Avatar } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import NewCardList from './NewCardList';
import Categories from './Categories';
import firebase from '../../firebase'
const { Search } = Input;
const { Option } = Select;

const ProjectPage = () => {
  let history = useHistory();
  const onSearch = () => console.log("coba");

  if (!firebase.getCurrentUsername()) {
    message.warning("please loggin first!")
    history.push('/auth/login')
    return null
  }
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
            <Avatar icon={<UserOutlined />} /> <strong>Hello, {firebase.getCurrentUsername()}</strong>
            <Button style={{ marginLeft: 15 }} onClick={logout}>Logout</Button>
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
  async function logout() {
    await firebase.logout()
    history.push("/auth/login")
    window.location.reload()
  }
};

export default ProjectPage;
