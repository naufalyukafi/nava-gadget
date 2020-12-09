import React from 'react'
import { Row, Col, Typography } from 'antd';
import { productListDemo, IProject } from "./ProjectListDumy"
import { ICategories, categoriesListDemo } from "./CategoriesDumy"
import { CardCategoryList } from "../../../Components"
import "./NewCardList.css"

const Categories = () => {
    return (
        <div>
            <Typography.Title level={3} style={{ fontWeight: 'bold', marginTop:'7px' }} >Kategori</Typography.Title>
            <Row align="middle" gutter={[16, 24]} className="card-list">
            {categoriesListDemo.map((item: ICategories) => (
                <Col key={item.id}>
                    <CardCategoryList id={item.id} category={item.category} logo={item.logo} />
                </Col>
            ))}
            </Row>
        </div>
    )

}

export default Categories
