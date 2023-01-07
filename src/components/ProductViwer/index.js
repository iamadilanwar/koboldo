import styles from "./styles.module.scss";
import React, { useState } from "react";
import { Button, Col, Image, Row, } from "antd";

export default function ProductViwer({imageList}) {
  const [select,setSelected]= useState("/assets/s20_1.webp")
  const handleSelect = (e) => {
   setSelected(e)
  }
  console.log(imageList)
  return (
    <div className={styles.productViwer}>
      <Row className={styles.productViwer_row}>
        <Col xs={24}  sm={24} lg={6} md={6} >
          {imageList.map((item) =>  <Button onClick={()=>handleSelect(item.img)}><img  src={item.img} preview={false} alt={item.img} /></Button>)}
        </Col>
        <Col xs={24}  sm={24} lg={18} md={18}><img  src={select} alt={select} /></Col>
      </Row>
    </div>
  );
}
