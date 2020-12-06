import React from 'react'
import { Card } from "antd"
import { ICategories } from "../modules/LoggedIn/Projects/CategoriesDumy"
const CardCategoryList = (props: ICategories) => {
    return (
        <div>
            <Card style={{ width: 250 }} cover={<img src={props.logo} alt={props.category} />} bodyStyle={{ display: 'none' }} ></Card>
        </div>
    )
}

export default CardCategoryList
