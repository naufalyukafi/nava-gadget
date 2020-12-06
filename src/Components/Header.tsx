import React from 'react';
import { Layout, Typography, Row, Col, Input, Select, Button, message, Avatar, Anchor, Drawer } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom"
import firebase from "../modules/firebase"
import "../App.css"
const { Search } = Input;
const { Option } = Select;
const Header = () => {
    const [visible, setVisible] = React.useState(false);
    const [placement, setPlacement] = React.useState('left');
    let history = useHistory();
    const onSearch = () => console.log("coba");

    if (!firebase.getCurrentUsername()) {
        history.push('/auth/login')
        // window.location.reload()
        message.warning("please loggin first!")
    }
    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="container-fluid">
            <Layout.Header className="header" style={{ backgroundColor: '#fff' }}>
                <Row align="middle" justify="space-between">
                    <Col>
                        <Link to="/project">
                            <Typography.Title level={4}>Nava Gadget</Typography.Title>
                        </Link>
                    </Col>
                    <Col className="mobileHidden">
                        <Anchor targetOffset={65}>
                            <Link to="/project">Beranda</Link>
                            <Link to="/project">About</Link>
                            <Avatar icon={<UserOutlined />} /> <strong>Hello, {firebase.getCurrentUsername()}</strong>
                        </Anchor>
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
                            <Anchor targetOffset={65}>
                                <Link to="#hero" title="Home">Home</Link>
                                <Link to="#about" title="About" >About</Link>
                                <Link to="#feature" title="Features">Features</Link>
                                <Avatar icon={<UserOutlined />} /> <strong>Hello, {firebase.getCurrentUsername()}</strong>
                                <Button onClick={logout}>Logout</Button>
                            </Anchor>
                        </Drawer>
                    </Col>
                </Row>
            </Layout.Header>
        </div>
    )

    async function logout() {
        await firebase.logout()
        history.push("/auth/login")
        window.location.reload()
    }
}

export default Header
