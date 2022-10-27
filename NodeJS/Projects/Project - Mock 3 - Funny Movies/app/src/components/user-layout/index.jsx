import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React, { useState } from "react";
import youtobe_logo from "../../assets/images/youtobe_logo.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./navbar";
import { MenuSider } from "./menu";
const { Header, Sider, Content } = Layout;

export const UserLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="bg-white"
      >
        <Link to="/home">
          {collapsed ? (
            <img src={logo} alt="Logo" className="logo" />
          ) : (
            <img src={youtobe_logo} alt="Logo" className="youtobe_logo" />
          )}
        </Link>
        <MenuSider />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background bg-white p-0"
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <Navbar />
        </Header>
        <Content
          className="site-layout-background bg-white"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props?.content}
        </Content>
      </Layout>
    </Layout>
  );
};
