import React from 'react';
import "./ProjectPage.css";
import { Layout, Typography, Row, Col, Card, Input, Select, Button, message, Avatar, Drawer, Radio, Space, Anchor, BackTop } from 'antd'
import { UserOutlined, UpCircleOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom"
import NewCardList from './NewCardList';
import Categories from './Categories';
import "../../../App.css";
import firebase from '../../firebase'
import { IProject, productListDemo } from "./ProjectListDumy"
import CardList from "../../../Components/CardList"
const { Option } = Select;
const { Search } = Input;

const ProjectPage = () => {
  const [visible, setVisible] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [suggestion, setSuggestion] = React.useState<any>([]);
  let history = useHistory()

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    const filteredItems = productListDemo.filter((item => {
      return item.title.toLowerCase().includes(query.toLowerCase())
    }))
    setSuggestion(filteredItems);
  }, [query])

  if (!firebase.getCurrentUsername()) {
    message.info("please loggin first")
    history.push("/auth")
    return null
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }


  console.log(query)
  console.log(suggestion)
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
            <Search placeholder="Temukan produk yang anda inginkan..." value={query} onChange={handleInputChange} allowClear enterButton style={{ marginTop: 15, minWidth: 300 }} />
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
      <Layout.Content style={{ padding: 50, marginBottom: '10vh' }}>
        {query ? <Row align="middle" gutter={[16, 24]} style={{ padding: 50 }} className="card-list" > {suggestion.map((props: IProject) => {
          return (
            <a href="/project/detail">
              <Col>
                <CardList category={props.category} id={props.id} image={props.image} location={props.location} price={props.price} title={props.title} />
              </Col>
            </a>
          )
        })} </Row> :
          <Layout.Content style={{ padding: 27 }}>
            <Categories />
            <NewCardList />
          </Layout.Content>

        }
      </Layout.Content>
      <Layout.Footer style={{ textAlign: 'center' }}>
        <div className="copyright">Copyright &copy; 2020, Create By Yukafi & Shiva</div>
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
