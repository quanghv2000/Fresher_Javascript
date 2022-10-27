import {
  LogoutOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Form, Input, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item
        className="menu-signed"
        onClick={() => {
          setIsLogged(false);
        }}
        style={{ fontWeight: 500 }}
      >
        <LogoutOutlined style={{ marginRight: 6 }} /> Đăng xuất
      </Menu.Item>
    </Menu>
  );

  const onFinish = (search) => {
    console.log("Success:", search);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          // compact
          style={{ display: "flex", marginTop: 16 }}
        >
          <Form.Item name="search">
            <Input
              style={{
                textAlign: "left",
                width: 300,
              }}
              placeholder="Tìm kiếm"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="default"
              style={{ backgroundColor: "#F8F8F8" }}
              htmlType="submit"
            >
              <SearchOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        {isLogged ? (
          <Dropdown overlay={menu} placement="bottom">
            <div style={{ cursor: "pointer" }}>
              <span
                style={{ marginRight: 8, color: "#606060", fontWeight: 500 }}
              >
                Quang Hà Văn
              </span>
              <Avatar
                className="mr-20"
                src="https://joeschmoe.io/api/v1/random"
              />
            </div>
          </Dropdown>
        ) : (
          <div>
            <Link to="/login">
              <Button>
                <UserOutlined />
                Đăng nhập
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
