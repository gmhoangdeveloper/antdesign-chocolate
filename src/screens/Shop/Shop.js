import {
  FacebookFilled,
  InstagramFilled,
  ShoppingCartOutlined,
  TwitterCircleFilled,
  UserOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Divider,
  Input,
  InputNumber,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import {Link} from "react-router-dom"
function Shop(props) {
  const { Title, Text } = Typography;

  const { Header, Content } = Layout;
  const [openModal, setopenModal] = useState(false);
  const [openModalCart, setopenModalCart] = useState(false);

  const product = (
    <>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        align="center"
        justify="center"
      >
        <Card
          bordered={false}
          cover={
            <>
              <div className="product__Main--imageHover">
                <div>
                  <img
                    alt=""
                    style={{ width: "50%" }}
                    src="/images/product1.jpg"
                  />
                </div>
                <div>
                  <img
                    alt=""
                    style={{ width: "50%" }}
                    src="/images/product0.1.jpg"
                  />
                  <div>
                    <Button
                      type="text"
                      style={{ width: "100%" }}
                      onClick={() => setopenModal(true)}
                    >
                      <Text type="warning">Quick View</Text>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          }
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Text>Gift Box of 12 Truffles</Text>
            <Text>
              <Text delete>$40</Text>&ensp;
              <Text>$30</Text>
            </Text>
            <InputNumber
              pattern="[0-9]*"
              style={{ width: "100%" }}
              min={1}
              max={10}
              defaultValue={1}
            />
            <Button
              style={{
                width: "100%",
                backgroundColor: "#4e4a42",
                color: "white",
              }}
              onClick={() => setopenModalCart(true)}
            >
              Add To Card
            </Button>
          </Space>
        </Card>
      </Col>
    </>
  );
  const oncancel = () => {
    setopenModalCart(false);
    var element = document.getElementsByClassName("Giangminhhoang");
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add("otherclass");
    }
  };
  const removeClas = () => {
    var element = document.getElementsByClassName("Giangminhhoang");
    for (var i = 0; i < element.length; i++) {
      element[i].classList.remove("otherclass");
    }
  };
  return (
    <>
      <Modal
        transitionName="example"
        maskTransitionName="none"
        footer={false}
        visible={openModalCart}
        onCancel={oncancel}
        afterClose={removeClas}
        wrapClassName="Giangminhhoang"
        style={{ overflow: "hidden" }}
        width={300}
      >
        <div style={{ height: "100vh" }}></div>
      </Modal>

      <Layout>
        <Affix offsetTop={0}>
          <Row
            justify="center"
            align="middle"
            className="banner__header--style "
          >
            <Col>
              <Title level={5}>Free Shipping Over 50$</Title>
            </Col>
          </Row>

          <Header className="nav__header">
            <Row
              justify="space-around"
              align="middle"
              className="maxwidth-content"
            >
              <Col
                span={6}
                className="nav__header--right"
                xs={{ order: 2 }}
                sm={{ order: 2 }}
                md={{ order: 2 }}
                lg={{ order: 1 }}
              >
                <Text> BAISERS DE CHOCOLAT</Text>
              </Col>
              <Col
                span={6}
                className="nav__header--center"
                xs={{ order: 3 }}
                sm={{ order: 3 }}
                md={{ order: 3 }}
                lg={{ order: 2 }}
              >
                <Row justify="center">
                  <Space align="center" size="middle">
                    <Text>
                      <Link to="/">Home</Link>
                    </Text>
                    <Text>
                      <Link to="/shop">SHOP</Link>
                    </Text>
                    <Text>ABOUT</Text>
                    <Text>CONTACT</Text>
                  </Space>
                </Row>
              </Col>
              <Col
                span={6}
                className="nav__header--left abcd"
                xs={{ order: 1 }}
                sm={{ order: 1 }}
                md={{ order: 1 }}
                lg={{ order: 3 }}
              >
                <Row justify="space-between" align="middle">
                  <Col
                    xs={{ order: 3 }}
                    sm={{ order: 3 }}
                    md={{ order: 3 }}
                    lg={{ order: 1 }}
                  >
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Text> Login</Text>
                  </Col>
                  <Col
                    className="nav__header--left--icon"
                    xs={{ order: 2 }}
                    sm={{ order: 2 }}
                    md={{ order: 2 }}
                    lg={{ order: 2 }}
                  >
                    <Text>
                      <FacebookFilled />
                      <InstagramFilled />
                      <YoutubeFilled />
                      <TwitterCircleFilled />
                    </Text>
                  </Col>
                  <Col
                    xs={{ order: 1 }}
                    sm={{ order: 1 }}
                    md={{ order: 1 }}
                    lg={{ order: 3 }}
                  >
                    <Text>
                      <Badge count={0} showZero size="small">
                        <ShoppingCartOutlined />
                      </Badge>
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Header>
        </Affix>

        <Content className="product__Content">
          <Title level={3}>CHOOSE YOUR CHOCOLATE</Title>
          <Modal
            centered
            width={1000}
            visible={openModal}
            onCancel={() => setopenModal(false)}
            footer={false}
          >
            <Row justify="center">
              <Col span={12} align="middle">
                <Carousel autoplay>
                  <div>
                    <img
                      alt=""
                      style={{ width: "90%" }}
                      src="https://static.wixstatic.com/media/8c0f2e_93cfaf7aa9f348f595bc26b0b9a185b6~mv2.jpg/v1/fill/w_492,h_492,al_c,q_85,usm_0.66_1.00_0.01/8c0f2e_93cfaf7aa9f348f595bc26b0b9a185b6~mv2.webp"
                    />
                  </div>
                  <div>
                    <img
                      alt=""
                      style={{ width: "90%" }}
                      src="https://static.wixstatic.com/media/8c0f2e_d55fb84441d3408c9971611b2e5b8b11~mv2.jpg/v1/fill/w_492,h_492,al_c,q_85,usm_0.66_1.00_0.01/8c0f2e_d55fb84441d3408c9971611b2e5b8b11~mv2.webp"
                    />
                  </div>{" "}
                  <div>
                    <img
                      alt=""
                      style={{ width: "100%" }}
                      src="https://static.wixstatic.com/media/ea26fd_d598eb0bd5af45d8bee1e2ca1bbf6c9b~mv2.jpg/v1/fill/w_492,h_492,al_c,q_85,usm_0.66_1.00_0.01/ea26fd_d598eb0bd5af45d8bee1e2ca1bbf6c9b~mv2.webp"
                    />
                  </div>
                </Carousel>
              </Col>
              <Col span={12} style={{ padding: "10px" }}>
                <Space direction="vertical" size="middle">
                  <Title level={4}>Gift Box of 12 Truffles</Title>{" "}
                  <Text>
                    <Text delete>$40</Text>&ensp;
                    <Text>$30</Text>
                  </Text>
                  <Text>SKU: 0001</Text>
                  <Text>Quantity</Text>
                  <InputNumber
                    pattern="[0-9]*"
                    min={1}
                    max={10}
                    defaultValue={1}
                  />
                </Space>{" "}
                <Button
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#bfa760",
                    width: "100%",
                    color: "white",
                  }}
                >
                  Add To Card
                </Button>
              </Col>
            </Row>
          </Modal>
          <Row className="product__Main">
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
          </Row>
          <Button
            style={{
              backgroundColor: "#bfa760",
              margin: "20px",
              padding: "0 30px",
            }}
            size="large"
          >
            Load More
          </Button>
        </Content>

        <Content className="aboutFrom__Content">
          <Row justify="center" align="middle" className="maxwidth-content">
            <Col span={8} className="">
              <Title>contact</Title>
              <Col span={6} style={{ margin: "auto" }}>
                <Divider />
              </Col>
              <Text>TEL: 123-456-7890 / INFO@MY-DOMAIN.COM</Text>
              <Text>500 TERRY FRANCOIS ST. SAN FRANCISCO, CA 94158</Text>
              <Text>OPENING HOURS 8:00AM-9:00PM</Text>
              <Row justify="center" align="middle" gutter={[8, 8]}>
                <Col span={12}>
                  <Col>
                    <Input
                      placeholder="Name"
                      className="aboutFrom__Content--input"
                    />
                  </Col>
                  <Col>
                    <Input
                      placeholder="Email"
                      className="aboutFrom__Content--input"
                    />
                  </Col>
                  <Col>
                    <Input
                      placeholder="Subject"
                      className="aboutFrom__Content--input"
                    />
                  </Col>
                </Col>
                <Col span={12}>
                  <TextArea
                    rows={5}
                    placeholder="Message"
                    className="aboutFrom__Content--input"
                  />
                </Col>
              </Row>
              <Row justify="end">
                <Col>
                  <Button className="aboutFrom__Content--button">Submit</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default Shop;
