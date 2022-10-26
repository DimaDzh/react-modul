import { FC } from "react";
import LogoSvg from "./LogoSvg";
import "./logoStyle.scss";

const Logo: FC = () => {
  return (
    <>
      <div className="logo__section">
        <LogoSvg />
        <div className="logo__title">
          <p>YABAO</p>
          <span>Дух китайской еды</span>
        </div>
      </div>
    </>
  );
};

export default Logo;
