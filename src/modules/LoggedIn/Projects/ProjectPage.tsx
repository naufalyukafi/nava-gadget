import React from 'react';
import "./ProjectPage.css";
import { Layout, Typography, Row, Col, Input, Select, Button, message, Avatar, Drawer, Radio, Space, Anchor, BackTop } from 'antd'
import { UserOutlined, UpCircleOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom"
import NewCardList from './NewCardList';
import Categories from './Categories';
import "../../../App.css";
import firebase from '../../firebase'
const { Search } = Input;
const { Option } = Select;

const ProjectPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [placement, setPlacement] = React.useState('left');
  let history = useHistory()
  const onSearch = () => console.log("coba");

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false);
  };

  if (!firebase.getCurrentUsername()) {
    message.info("please loggin first")
    history.push("/auth")
    return null
  }

  return (
    <Layout>
      <Layout.Header style={{ backgroundColor: '#fff' }}>
        <Row align="middle" justify="space-around" >
          <Link to="/project">
            <Col>
              <Typography.Title level={4} style={{ fontWeight: 'bold' }}>Gadged Store</Typography.Title>
            </Col>
          </Link>
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
          <Col className='navbar-search' >
            <Avatar icon={<UserOutlined />} /> <strong>Hello, {firebase.getCurrentUsername()}</strong>
            <Button onClick={logout} style={{ marginLeft: 15 }}>Logout</Button>
          </Col>
          <Col className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <strong>Hello, {firebase.getCurrentUsername()}</strong> <br /> <br />
              <Link to="#hero" title="Home">Home</Link> <br /> <br />
              <Link to="#about" title="About" >About</Link> <br /> <br />
              <Link to="#feature" title="Features">Features</Link> <br /> <br />
              <Button onClick={logout}>Logout</Button>
            </Drawer>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content style={{ padding: 50 }}>
        <Categories />
        <NewCardList />
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <div className="copyright">Copyright &copy; 2020, Create By Yukafi & Shifa</div>
        <BackTop>
          <Avatar icon={<UpCircleOutlined />} style={{ backgroundColor: 'blueviolet' }} />
        </BackTop>
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
