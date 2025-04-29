import React, { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 40,
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      zIndex: 10000000000,
      top: 0,
      right: 0,
      color: "red",
    }}
    spin
  />
);
const Loader = () => <Spin indicator={antIcon} />;
export default Loader;
