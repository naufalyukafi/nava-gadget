import React from 'react'
import { Layout, Typography, Row, Col, Input, Select, Button, Carousel, Card } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import "../../../App";

const DetailCardPage = () => {
    function onChange({ a, b, c }: any) {
        console.log(a, b, c);
    }
    return (
        <div>
            <Row justify="space-around" gutter={[24, 16]} style={{ marginTop: 20 }} >
                <Col>
                    <Carousel className="detail-caraousel" style={{ width: 600 }} afterChange={onChange} >
                        <div>
                            <h3 style={{ height: 160, color: 'white', lineHeight: 160, textAlign: 'center', background: '#364d79' }}>1</h3>
                        </div>
                        <div>
                            <h3 style={{ height: 160, color: 'white', lineHeight: 160, textAlign: 'center', background: '#364d79' }}>2</h3>
                        </div>
                        <div>
                            <h3 style={{ height: 160, color: 'white', lineHeight: 160, textAlign: 'center', background: '#364d79' }}>3</h3>
                        </div>
                    </Carousel>
                    <Card className="detail-product" style={{ width: 600, border: '1px solid black' }}>
                        <Typography.Title level={3} style={{ fontWeight: 'bold' }} >SIAP KIRIM KE SELURUH INDONESIA</Typography.Title>
                        <Typography.Text style={{ marginTop: 3 }} >Charger Hp Samsung Galaxy S8 Original 100% Fast Charging USB Type-C
                        support 9v (ORI 1OO)

                        Charger adalah salah satu alat vital untuk sebuah gadget. Jika charger anda rusak, membeli produk ini adalah pilihan yang tepat buat anda.
                        Gunakanlah selalu charger original untuk mencharging gadget anda. Menggunakan charger palsu, selain ada resiko dapat merusak gadget, biasanya charger palsu juga tidak tahan lama, cepat rusak, suply daya tidak stabil, dll. Anda juga dapat membeli produk ini sebagai charger cadangan.
                        Memiliki charger cadangan sangat berguna untuk dibawa-bawa untuk menrecharge gadget anda saat berpergian,berlibur,dll.

                        Charger ini support output 9V fast charging, jadi sangat cepat untuk mencharging Gadget yang dilengkapi fitur fast charging juga seperti Xiaomi mi5, Samsung Galaxy Note 7, A5 2017, A7 2017,dll. Jika Charger ini digunakan untuk Gadget yang tidak memiliki fitur Fast Charging, maka charger ini beroperasi secara normal seperti charger 2A pada umumnya. </Typography.Text>
                    </Card>
                </Col>
                <Col>
                    <Card className="detail-price" style={{ width: 400, border: '1px solid black' }}>
                        <Typography.Text >Charger Samsung S8 S8+ Note 8 S9 S9  plus fast charging tipe coriginal 100%</Typography.Text>
                        <Row justify="space-between" align="middle" style={{ marginTop: 20 }}>
                            <Col>
                                <Typography.Text type="secondary">Lumajang, Jawa Timur</Typography.Text>
                            </Col>
                            <Col>
                                <Typography.Title level={3}>Rp. 125.000</Typography.Title>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="detail-chat" style={{ width: 400, border: '1px solid black', marginTop: 20 }}>
                        <Row align="middle" justify="center">
                            <Col style={{ marginRight: 5 }} ><PhoneOutlined /></Col>
                            <Col style={{ color: 'black' }}>Suloyo Aji - Toko Elektronik</Col>
                            <Button type="primary" style={{ marginTop: 10, minWidth: '100%', color: 'black', fontWeight: 'bold' }} >Chat denga penjual</Button>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default DetailCardPage
