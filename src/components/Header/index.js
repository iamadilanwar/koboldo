import styles from "./styles.module.scss";
import React from "react";
import { Header } from "antd/es/layout/layout";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function HeaderApp() {
  return (
    <Header
      className={styles.header}
    >
      <Desktop />
      <Mobile />
    </Header>
  );
}
