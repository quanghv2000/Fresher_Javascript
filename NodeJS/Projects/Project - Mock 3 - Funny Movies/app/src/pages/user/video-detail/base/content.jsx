import {
  DislikeOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import YouTube from "react-youtube";

export const Content = (props) => {
  const convertNumOfView = function (number) {
    const units = ["", "N", "Tr", "T"];
    // zeroes: số chữ số 0 đằng sau tính đến hàng tỷ: 0,1,2 | 3,4,5 | 6,7,8 | 9
    const zeroes = Math.floor((number / 1.0e1).toFixed(0).toString().length);
    // unit: đơn vị: ["", "N", "Tr", "T"] - lấy zeroes / 3
    // 0,1,2 (0 - "") | 3,4,5 (1 - "N") | 6,7,8 (2 - Tr) | 9 (3 - T)
    var unit = units[Math.floor(zeroes / 3)];
    // exponent: tính số mũ - lấy (zeroes / 3) * 3 (hàng tỉ có 9 số 0) => * 3
    var exponent = Math.floor(zeroes / 3) * 3;

    const numOfView = (number / Math.pow(10, exponent)).toFixed(1) + " " + unit;
    return numOfView;
  };

  const params = useParams();
  const opts = {
    width: "100%",
    height: "420px",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const videosRight = props?.videosRight;
  const videoDetail = props?.videoDetail;

  console.log(videoDetail);

  return (
    <div>
      <Row>
        <Col span={16} style={{ paddingRight: 24 }}>
          {" "}
          <YouTube
            videoId={videoDetail?.videoId}
            opts={opts}
            style={{ backgroundColor: "#F5F5F5" }}
          />
          <h3
            style={{ fontSize: "20px", color: "#030303", fontWeight: "bold" }}
          >
            {videoDetail?.title}
          </h3>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                color: "#030303",
                fontWeight: 600,
              }}
            >
              <p style={{ marginRight: 8 }}>
                {videoDetail?.numOfView?.toLocaleString()} lượt xem
              </p>
              •<p style={{ marginLeft: 8 }}>30 thg 10, 2017</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  marginRight: 48,
                  cursor: "pointer",
                }}
              >
                <LikeOutlined style={{ fontSize: 24, cursor: "pointer" }} />{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "#030303",
                    fontWeight: 600,
                  }}
                >
                  6,2 N
                </span>
              </div>
              <div
                style={{
                  marginRight: 48,
                  cursor: "pointer",
                }}
              >
                <DislikeOutlined style={{ fontSize: 24, cursor: "pointer" }} />{" "}
                <span
                  style={{
                    fontSize: "13px",
                    color: "#030303",
                    fontWeight: 600,
                  }}
                >
                  163
                </span>
              </div>
              <div
                style={{
                  cursor: "pointer",
                }}
              >
                <ShareAltOutlined style={{ fontSize: 24 }} />
              </div>
            </div>
          </div>
          <Row>
            <Col span={12}>
              <div
                style={{
                  height: 65,
                  borderRadius: "4px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 12,
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <img
                      src={videoDetail?.sharedBy?.imageUrl}
                      alt="avatar"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        marginRight: 12,
                        backgroundColor: "#F5F5F5",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: "14px",
                        color: "#030303",
                        fontWeight: "bold",
                      }}
                    >
                      {videoDetail?.sharedBy?.name}
                    </p>
                    <p
                      style={{
                        margin: 0,
                        padding: 0,
                        fontSize: "12px",
                        color: "#606060",
                      }}
                    >
                      2,28 N người đăng ký
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: "#CC0000",
                      color: "white",
                      fontWeight: "bold",
                      border: "#CC0000",
                      cursor: "pointer",
                      padding: "8px 20px",
                      borderRadius: "2px",
                    }}
                  >
                    ĐĂNG KÝ
                  </button>
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            {videosRight?.map((video, index) => {
              return (
                <>
                  <Link to={`/video/${video.id}`} style={{ display: "flex" }}>
                    <Col
                      span={12}
                      style={{ marginBottom: "12px", cursor: "pointer" }}
                      key={index}
                    >
                      <img
                        src={`http://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt=""
                        style={{ backgroundColor: "#F5F5F5", width: "100%" }}
                      />
                    </Col>
                    <Col span={12} style={{ paddingLeft: "8px" }}>
                      <div>
                        <p
                          style={{
                            margin: 0,
                            color: "#030303",
                            fontWeight: 500,
                            fontSize: 14,
                            paddingRight: "12px",
                          }}
                        >
                          {video.title}
                        </p>
                        <div style={{ fontSize: 12, color: "#606060" }}>
                          <p style={{ margin: 0 }}>{video?.sharedBy?.name}</p>
                          <p style={{ margin: 0 }}>
                            {convertNumOfView(video.numOfView)} lượt xem • 1 năm
                            trước
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Link>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
