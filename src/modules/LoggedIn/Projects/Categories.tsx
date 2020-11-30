import React from 'react'
import { Row, Col, Typography } from 'antd';
import { productListDemo, IProject } from "./ProjectListDumy"
import { ICategories, categoriesListDemo } from "./CategoriesDumy"
import { CardCategoryList } from "../../../Components"

const Categories = () => {
    return (
        <Row align="middle" justify="space-around" gutter={[16, 16]} >
            {categoriesListDemo.map((item: ICategories) => (
                <div>
                    <Col key={item.id}>
                        <CardCategoryList id={item.id} category={item.category} logo={item.logo} />
                    </Col>
                </div>
            ))}
        </Row>
    )

}

export default Categories
