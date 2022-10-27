import { Col, Row } from "antd";
import React from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import "./styles.css";

export const VideoList = (props) => {
  const videos = props.videos;

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

  return (
    <>
      <div>
        <Row>
          {videos?.map((video, index) => {
            return (
              <Col
                xs={24}
                sm={24}
                md={12}
                xl={6}
                key={index}
                style={{ padding: "10px 10px 20px" }}
              >
                <Link to={`/video/${video?.id}`}>
                  {/* <YouTube
                    videoId={video?.url?.split("watch?v=")[1]}
                    opts={opts}
                    style={{ backgroundColor: "#F5F5F5" }}
                  /> */}
                  <img
                    src={`http://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt=""
                    style={{ backgroundColor: "#F5F5F5", width: "100%", maxHeight: '165px' }}
                  />
                  <div
                    style={{
                      marginTop: 8,
                      display: "flex",
                    }}
                  >
                    <div>
                      {" "}
                      <img
                        src={video?.sharedBy?.imageUrl}
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
                          color: "#030303",
                          fontWeight: 500,
                          fontSize: 14,
                          paddingRight: '12px'
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
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
