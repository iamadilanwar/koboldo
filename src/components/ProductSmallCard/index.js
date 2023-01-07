import styles from "./styles.module.scss";
import React from "react";
import { Badge, Button, Row, Tag } from "antd";
import { BsBag, BsHeart } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";

export default function ProductSmallCard({ productDetails }) {
  return (
    <div className={styles.productSmallCard}>
      <div className={styles.productSmallCard_top}>
        <Badge count={2} color="#000000" size="small">
          <BsBag />
        </Badge>
        <p>
          <b>Ends: </b> {productDetails.saleEnd}
        </p>
        <div className={styles.productSmallCard_top_btn}>
          <Button type="primary">
            <MdBarChart />
          </Button>
          <Button type="primary">
            <BsHeart />
          </Button>
        </div>
      </div>
      <img src={productDetails.img} alt={productDetails.img} />
      <Row className={styles.productSmallCard_details}>
        <h1>{productDetails.title}</h1>
        <Tag color="default">Online Price Range</Tag>
        <h2>{productDetails.price}</h2>
      </Row>
    </div>
  );
}
