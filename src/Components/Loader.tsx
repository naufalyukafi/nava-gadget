import React from 'react'
import { Layout, Menu, Typography, Row, Col, Skeleton, Switch, Card } from 'antd';
const { Meta } = Card;
const Loader = () => {
    const [loading, setLoading] = React.useState(true);
    const onChange = (checked: boolean) => {
        setLoading(!checked)
    }
    return (
        <Row gutter={[32, 24]} style={{ height: '90vh' }}>
            <Col style={{ marginTop: 20 }}>
                <Card style={{ width: 250, marginTop: 16, height: 300 }} >
                    <Skeleton loading={loading} active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col style={{ marginTop: 20 }}>
                <Card style={{ width: 250, marginTop: 16, height: 300 }}>
                    <Skeleton loading={loading} active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col style={{ marginTop: 20 }}>
                <Card style={{ width: 250, marginTop: 16, height: 300 }}>
                    <Skeleton loading={loading} active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
            <Col style={{ marginTop: 20 }}>
                <Card style={{ width: 250, marginTop: 16, height: 300 }}>
                    <Skeleton loading={loading} active>
                        <Meta
                            title="Card title"
                            description="This is the description"
                        />
                    </Skeleton>
                </Card>
            </Col>
        </Row>

    )
}

export default Loader
