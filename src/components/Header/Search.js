import styles from "./styles.module.scss";
import React from "react";
import { Button, Input } from "antd";
import { FilterFilled } from "@ant-design/icons";
const { Search } = Input;

const SearchMenu = () => {
  const onSearch = (value) => console.log(value);
  return (
    <div className={styles.search}>
      <Button type="link">
        <FilterFilled />
      </Button>
      <Search placeholder="input search text" allowClear onSearch={onSearch} />
    </div>
  );
};

export default SearchMenu;
