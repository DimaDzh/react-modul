import { BackTop, Row, Col } from "antd";
import React from "react";
import Logo from "../Header/Logo/Logo";
import "./footerStyle.scss";
import FeadBackButton from "./FeadBackButton";
import FBIcon from "./assets/icons/image/FaceBookIcon";
import ViberIcon from "./assets/icons/image/ViberIcon";
import BackCallButton from "../Header/BackCallButton/BackCallButton";
import PhoneCall from "../Header/BackCallButton/PhoneCall";

const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#1088e9",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

const FooterSetion: React.FC = () => (
  <footer className="footer">
    <div style={{ height: "auto", padding: 8 }}>
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>

    <div className="footer__content">
      <div className="left">
        <Logo />
        <div className="list__wrap">
          <div className="list">
            <h4>
              <a href="#">Колорийность и состав</a>
            </h4>
            <h4>
              <a href="#">Мы в соцсетях</a>
            </h4>
            <p>
              <a href="#">YouTube</a>
            </p>
            <p>
              <a href="#">Instagram</a>
            </p>
          </div>
          <div className="list">
            <h4>
              <a href="#">Правовая информация</a>
            </h4>
            <h4>
              <a href="#">Мы в соцсетях</a>
            </h4>
            <p>
              <a href="#">FaceBook</a>
            </p>
            <p>
              <a href="#">Telegram</a>
            </p>
          </div>
        </div>
      </div>

      <div className="right">
        <h3>Остались вопросы? Мы всегда на связи</h3>
        <div className="social__section">
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <FBIcon />
          </FeadBackButton>
          <FeadBackButton>
            <h4>Написать нам</h4>
          </FeadBackButton>
        </div>
        <PhoneCall />
      </div>
    </div>

    <div className="bottom">
      <h4>YaBao все права защищені</h4>
      <div className="icon__list">
        <span className="pay__icon"></span>
        <span className="pay__icon"></span>
        <span className="pay__icon"></span>
      </div>
      <BackCallButton />

      <div className="badge__image"></div>
    </div>
  </footer>
);

export default FooterSetion;
