import React from 'react'
import { Row, Col, Typography } from 'antd';
import { productListDemo, IProject } from "./ProjectListDumy"
import { CardList } from "../../../Components"
import "./NewCardList.css";
const NewCardList = () => {
    return (
        <div>
            <Typography.Title level={3} style={{ fontWeight: 'bold' }} >Rekomendasi Terbaru</Typography.Title>
            <Row align="middle" gutter={[16, 24]} className="card-list" >
                {productListDemo.map((item: IProject) => (
                    <a href="/project/detail">
                        <Col>
                            <CardList image={item.image} id={item.id} category={item.category} description={item.description} price={item.price} location={item.location} key={item.id} />
                        </Col>
                    </a>
                ))}
            </Row>
        </div>
    )
}

export default NewCardList
