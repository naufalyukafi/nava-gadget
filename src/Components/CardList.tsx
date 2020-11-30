import React from 'react'
import { Row, Col, Button, Typography, Card } from "antd"
import { IProject } from "../modules/LoggedIn/Projects/ProjectListDumy"
const CardList = (props: IProject) => {
    return (
        <Card hoverable
            style={{ width: 300, borderRadius: 10 }}
            cover={<img src={props.image} />} >
            <Row align="middle" justify="space-between" style={{ fontWeight: "bold" }}>
                <Col>{props.price}</Col>
                <Button type="primary" style={{ fontWeight: "bold" }} >{props.category}</Button>
            </Row>
            <Row style={{ marginTop: 10 }}>
                {props.description}
            </Row>
            <Typography.Text type="secondary">
                {props.location}
            </Typography.Text>
        </Card>
    )
}

export default CardList
