import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "410px",
  width: "1100px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
const sliderImg1 = require("./Slide1.png");
const sliderImg2 = require("./Slide2.jpg");
const sliderImg3 = require("./Slide3.png");

const SliderMain: React.FC = () => (
  <>
    <Carousel autoplay className="slider">
      <div>
        <h3 style={contentStyle}>
          <img
            src={sliderImg1}
            style={{ width: "100% ", height: "100%" }}
          ></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img
            src={sliderImg2}
            style={{ width: "100% ", height: "100%", borderRadius: "13px" }}
          ></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img
            src={sliderImg1}
            style={{ width: "100% ", height: "100%" }}
          ></img>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img
            src={sliderImg3}
            style={{ width: "100% ", height: "100%", borderRadius: "13px" }}
          ></img>
        </h3>
      </div>
    </Carousel>
  </>
);

export default SliderMain;
