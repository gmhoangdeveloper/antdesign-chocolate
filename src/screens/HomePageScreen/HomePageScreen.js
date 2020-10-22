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
  Col,
  Divider,
  Image,
  Input,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {Link} from "react-router-dom"
import React from "react";
function HomePageScreen(props) {
  const { Title, Text } = Typography;
  const { Header, Content } = Layout;
  return (
    <>
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
                    <Text><Link to="/">Home</Link></Text>
                    <Text><Link to="/shop">SHOP</Link></Text>
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
        <Content className="banner__content">
          <Row align="middle" justify="center">
            <Col>
              <Text>- CHOCOLATE BOUTIQUE -</Text>
              <span className="banner__content--text">BAISERS</span>
              <span className="banner__content--text">CHOCOLAT</span>
              <Button ghost={true}>SHOPPING ONLINE </Button>
            </Col>
          </Row>
        </Content>
        <Content className="about--shop__content ">
          <Row justify="center" align="middle" className="maxwidth-content">
            <Col span={8}>
              <Space direction="vertical">
                <Text>CELEBRATE A SPECIAL DAY </Text>
                <Text>LIMITED EDITION ASSORTED CHOCOLATE BOX</Text>
                <Col span={10} offset={8} align="center">
                  <Divider plain></Divider>
                </Col>
                <Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.​
                </Text>

                <Button type="text">SHOP ALL ></Button>
              </Space>
            </Col>
            <Col span={8} className="about--shop__content--right">
              <div width="400px">
                <div className="about--shop__content--left--content">
                  <div className="about--shop__content--left--content--text">
                    <span>
                      Now For <br />
                    </span>
                    <span>34$</span>
                  </div>
                </div>
                <Image
                  width="340px"
                  src="https://static.wixstatic.com/media/8c0f2e_93cfaf7aa9f348f595bc26b0b9a185b6~mv2.jpg/v1/fill/w_524,h_524,al_c,q_80,usm_0.66_1.00_0.01/8c0f2e_93cfaf7aa9f348f595bc26b0b9a185b6~mv2.webp"
                />
                <Button className="animate__animated animate__fadeInUp ">
                  Quick View
                </Button>
              </div>
            </Col>
          </Row>
        </Content>
        <Content>
          <video autoPlay muted loop className="Video__content">
            <source src="videos/video.mp4" type="video/mp4" />
          </video>
        </Content>
        <Content className="about__content">
          <Row justify="center" align="middle" className="maxwidth-content">
            <Col span={8} className="about__content--image" align="center">
              <img
                alt="hoang"
                width="340px"
                src="https://static.wixstatic.com/media/5bfb6f_9187ca7d81a740878fcf167282edab65.jpg/v1/fill/w_461,h_600,al_c,q_80,usm_0.66_1.00_0.01/5bfb6f_9187ca7d81a740878fcf167282edab65.webp"
              />
            </Col>
            <Col span={8} className="about__content--text">
              <Space direction="vertical" align="center">
                <Title>ABOUT </Title>
                <Text>BAISERS DE CHOCOLAT</Text>
                <Col span={8}>
                  <Divider />
                </Col>

                <Text>
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page.
                </Text>
                <Text>
                  I’m a great place for you to tell a story and let your users
                  know a little more about you.​ This is a great space to write
                  long text about your company and your services. You can use
                  this space to go into a little more detail about your company.
                  Talk about your team and what services you provide.
                </Text>
              </Space>
            </Col>
          </Row>
        </Content>
        <Content className="aboutTwo_Content">
          <Row justify="center" align="middle">
            <Col>
              <Title level={2}>“There is nothing better than a friend,</Title>
              <Title level={2}> unless it is a friend with chocolate.”</Title>
              <Text level={4}>- Linda Grayson -</Text>
            </Col>
          </Row>
        </Content>
        <Content className="aboutThree_Content">
          <Row justify="center" align="middle" className="maxwidth-content">
            <Col span={8} className="aboutThree_Content--text">
              <Title>OUR CACAO BEANS</Title>
              <Title level={4}>QUALITY CACAO FROM AROUND THE GLOBE​</Title>
              <Col span={4}>
                <Divider />
              </Col>
              <Text>
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.​
              </Text>
            </Col>
            <Col span={8} className="aboutThree_Content--image">
              <Row justify="space-between">
                <Image src="/images/About.jpg" width="200px" height="440px" />

                <Image
                  src="/images/aboutthree.jpg"
                  width="200px"
                  height="440px"
                />
              </Row>
            </Col>
          </Row>
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
                  </Col>{" "}
                  <Col>
                    <Input
                      placeholder="Subject"
                      className="aboutFrom__Content--input"
                    />{" "}
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

export default HomePageScreen;
