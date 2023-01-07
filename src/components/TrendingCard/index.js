import styles from "./styles.module.scss";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

export default function TrendingBanner() {
  return (
    <div className={styles.trendingBanner}>
      <Text type="secondary"> What's...</Text>
      <h1>Trending</h1>
    </div>
  );
}
