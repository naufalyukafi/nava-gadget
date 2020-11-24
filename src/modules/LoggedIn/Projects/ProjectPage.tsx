import React from 'react'
import { Layout, Typography, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const ProjectPage = () => {
    return (
        <Layout style={{ height: "100vh" }}>
        <Layout.Header style={{ backgroundColor: "#fff" }}>
          <Row align="middle" justify="space-between">
            <Col>
              <Typography.Title level={4}>NAVA STORE</Typography.Title>
            </Col>
            <Col>
              <Typography.Text>NAVA</Typography.Text>
              <UserOutlined style={{ marginLeft: 15 }} />
            </Col>
          </Row>
        </Layout.Header>
        <Layout.Content style={{ padding: 50 }}>
        </Layout.Content>
        </Layout>
      );
}

export default ProjectPage