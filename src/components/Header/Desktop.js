import styles from "./styles.module.scss";
import React from "react";
import { Menu, Grid, Avatar } from "antd";
import { BsBagFill } from "react-icons/bs";
import { ImFire, ImVideoCamera } from "react-icons/im";
import { IoLocationOutline, IoMenu } from "react-icons/io5";

import SearchMenu from "./Search";

const { useBreakpoint } = Grid;
const { SubMenu, ItemGroup, Item } = Menu;

const Desktop = () => {
  const { md } = useBreakpoint();
  return (
    <div className={styles.headerDesktop}>
      <h1> LOgo</h1>
      <Menu mode={md ? "horizontal" : "inline"} theme="dark">
        <SubMenu
          key="sub1"
          title={
            <span>
              <IoMenu /> Menu
            </span>
          }
        >
          <ItemGroup title="Item 1">
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
          </ItemGroup>
          <ItemGroup title="Item 2">
            <Item key="setting:3">Option 3</Item>
            <Item key="setting:4">Option 4</Item>
          </ItemGroup>
        </SubMenu>
        <Item key="location">
          <a href="/">
            {" "}
            <IoLocationOutline /> Location
          </a>
        </Item>
      </Menu>
      <div style={{ alignSelf: "center", width: "30rem" }}>
        <SearchMenu />
      </div>

      <Menu mode={md ? "horizontal" : "inline"} theme="dark">
        <Item key="readShow">
          <ImVideoCamera /> <span>Road Show</span>
        </Item>
        <Item key="wishlist">
          <ImFire />
        </Item>
        <Item key="app">
          <a href="/">
            <BsBagFill />
          </a>
        </Item>
      </Menu>
      <Avatar
        size="large"
        src="/assets/michael.png"
        style={{
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default Desktop;
