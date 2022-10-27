import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import google_logo from "../../../../assets/images/google.png";
import youtobe_logo from "../../../../assets/images/youtobe_logo.png";

export const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        width: "100vw",
        height: "100vh",
        paddingTop: 40,
      }}
    >
      <Link to="/home">
        <div style={{ textAlign: "center", cursor: 'pointer' }}>
          <img
            src={youtobe_logo}
            alt="youtobe_logo"
            style={{ width: "10%", padding: "40px 0px" }}
          />
        </div>
      </Link>
      <div
        style={{
          width: 380,
          margin: "auto",
          backgroundColor: "white",
          padding: "20px 40px",
        }}
      >
        <h2
          style={{ textAlign: "center", padding: "20px", fontWeight: "bold" }}
        >
          ĐĂNG NHẬP
        </h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Nhập địa chỉ email!",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Địa chỉ email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Nhập mật khẩu của bạn!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Lưu mật khẩu</Checkbox>
                </Form.Item>
              </div>
              <div>
                <a className="login-form-forgot" href="/forgot-password">
                  Quên mật khẩu?
                </a>
              </div>
            </div>
          </Form.Item>
          <Form.Item>
            <div style={{ textAlign: "center" }}>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: "300px",
                  height: "38px",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                Đăng nhập
              </Button>
            </div>
          </Form.Item>
          <Button
            className="login-form-button"
            style={{
              width: "300px",
              height: "38px",
              fontWeight: 500,
              marginTop: "-20px",
              backgroundColor: "#F5F5F5",
              marginBottom: "20px",
              color: "#0000008A",
            }}
          >
            <img
              src={google_logo}
              alt="google_logo"
              style={{ width: "22px", height: "22px", marginRight: "20px" }}
            />
            Đăng nhập với Google
          </Button>
          <div
            style={{ margin: 0, textAlign: "center", paddingBottom: "20px" }}
          >
            Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
