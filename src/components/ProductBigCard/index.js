import styles from "./styles.module.scss";
import React from "react";
import { Col, Rate, Row, Typography } from "antd";
import ProductViwer from "../ProductViwer";
import { HighlightedProduct } from "../../data/dataStore";

const { Text } = Typography;

export default function ProductBigCard() {
  return (
    <div className={styles.productBigCard}>
      {HighlightedProduct.imgList && (
        <ProductViwer imageList={HighlightedProduct.imgList} />
      )}
      <Row>
        <Col span={24}><h1>{HighlightedProduct.title}</h1></Col>
        <Col span={24}>
          <Rate
            allowClear={false}
            defaultValue={3}
            count="5"
            tooltips={"hello"}
          />{" "}
          <Text type="secondary">{HighlightedProduct.rating}</Text>
        </Col>
        <Col span={24}>
          <p>{HighlightedProduct.description}</p>
        </Col>
      </Row>
    </div>
  );
}
