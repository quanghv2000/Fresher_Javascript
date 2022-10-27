import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ClockCircleOutlined,
  HistoryOutlined,
  HomeOutlined,
  LikeOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./styles.css";

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Trang chủ",
    path: "/home",
  },
  {
    key: "history",
    icon: <HistoryOutlined />,
    label: "Video đã xem",
    path: "/history",
  },
  {
    key: "your_video",
    icon: <YoutubeOutlined />,
    label: "Video của bạn",
    path: "/your-video",
  },
  {
    key: "watch_later",
    icon: <ClockCircleOutlined />,
    label: "Xem sau",
    path: "/watch-later",
  },
  {
    key: "liked_video",
    icon: <LikeOutlined />,
    label: "Video đã thích",
    path: "/liked-video",
  },
];

export const MenuSider = () => {
  const location = useLocation();
  return (
    <>
      <Menu
        className="menu-sider"
        theme="light"
        mode="inline"
      >
        {menuItems.map((menuItem, index) => {
          return (
            <Menu.Item
              key={menuItem.key}
              icon={menuItem?.icon}
              className={
                location.pathname === menuItem?.path
                  ? "active__menu--sider"
                  : ""
              }
            >
              <Link
                to={menuItem?.path}
                className={
                  location.pathname === menuItem?.path
                    ? "active__menu--sider-link"
                    : ""
                }
              >
                {menuItem?.label}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </>
  );
};
