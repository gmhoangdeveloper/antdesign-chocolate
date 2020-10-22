import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Recruitery from "./Recruitery";

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
function Test(props) {
  // const [number, setnumber] = useState();
  // const hanldeNumber = (e) => {
  //   props.handleReture(e.target.value);
  // };
  return (
    <>
      {/* <h1>Text</h1>
      <h1>{props.handleProps}</h1>
      <input type="text" name="number" onChange={hanldeNumber}></input> */}
      <Recruitery initialCount={1} age={25}></Recruitery>
    </>
  );
}

export default Test;
