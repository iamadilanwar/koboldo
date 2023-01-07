import React from "react";
import styles from "./styles.module.scss";
import { Button } from "antd";
import {
  SearchOutlined,
  VideoCameraOutlined,
  MenuOutlined,
} from "@ant-design/icons";


const Mobile = () => {
  return (
    <div className={styles.headerMobile}>
      <Button type="link">
        <MenuOutlined />
      </Button>
      <div style={{ alignSelf: "center" }}>
        <h1> LOgo</h1>
      </div>
      <div style={{ alignSelf: "center" }}>
      <Button type="link">
        <VideoCameraOutlined />
      </Button>
      <Button type="link">
        <SearchOutlined />
      </Button>
      </div>
    </div>
  );
};

export default Mobile;
