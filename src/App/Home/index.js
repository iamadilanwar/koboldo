import styles from "./styles.module.scss";
import { Col, Row, Grid, Divider, Form, Button, Select } from "antd";
import React from "react";
import ProductBigCard from "../../components/ProductBigCard";
import TrendingBanner from "../../components/TrendingCard";
import ProductSmallCard from "../../components/ProductSmallCard";
import { myProduct } from "../../data/dataStore";
import { QuestionCircleOutlined } from "@ant-design/icons";

const { useBreakpoint } = Grid;
const { Option } = Select;

function Home() {
  const { md } = useBreakpoint();

  const [form] = Form.useForm();

  const handleMyOffer = (e) => {
    console.log(e);
  };

  return (
    <div className={styles.homePage}>
      <TrendingBanner />
      <Row className={styles.homePage_section1}>
        <Col
          span={8}
          xs={24}
          sm={24}
          lg={8}
          md={8}
          className={styles.homePage_section1_BigCard}
        >
          <ProductBigCard />
        </Col>
        <Col xs={24} sm={24} lg={16} md={16}>
          <Row>
            <Col
              span={24}
              style={{ display: "flex", flexWrap: md ? "nowrap" : "wrap" }}
            >
              {myProduct.map((product, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={12}
                  lg={8}
                  md={8}
                  className={styles.smallCard}
                >
                  <ProductSmallCard productDetails={product} />
                </Col>
              ))}
            </Col>
            <Col
              span={24}
              style={{ display: "flex", flexWrap: md ? "nowrap" : "wrap" }}
            >
              <Col xs={24} sm={24} lg={6} md={6} className={styles.lowerCard}>
                <div className={styles.card2}>
                  <h3>Condition</h3>
                </div>
              </Col>
              <Col xs={24} sm={24} lg={18} md={18} className={styles.lowerCard}>
                <div className={styles.card2}>
                  <Divider>MY Offer Details</Divider>
                  <Form form={form} layout="vertical" onFinish={handleMyOffer}>
                    <Form.Item
                      label="Quantity"
                      tooltip={{
                        title: "Quantity",
                        icon: <QuestionCircleOutlined />,
                      }}
                      labelCol={{
                        span: 4,
                      }}
                      wrapperCol={{
                        span: 10,
                      }}
                    >
                      <Select>
                        <Option value="option1">option1</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" style={{ width: "55%" }}>
                        My Offer
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
