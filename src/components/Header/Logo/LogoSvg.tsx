import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Space } from "antd";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6.48633"
      y="6.4856"
      width="51.0286"
      height="51.0286"
      rx="2"
      stroke="#FF2E65"
      stroke-width="2"
    />
    <rect
      x="1.5"
      y="1.5"
      width="61"
      height="61"
      rx="6.5"
      stroke="#FF2E65"
      stroke-width="3"
    />
    <rect
      x="14.6289"
      y="39.188"
      width="34.5417"
      height="3.16632"
      rx="1"
      fill="#FF2E65"
    />
    <rect
      x="33.8789"
      y="33.999"
      width="17.0492"
      height="3.16632"
      rx="1"
      transform="rotate(-45 33.8789 33.999)"
      fill="#FF2E65"
    />
    <rect
      x="27.8379"
      y="36.3022"
      width="17.0505"
      height="3.16632"
      rx="1"
      transform="rotate(-135 27.8379 36.3022)"
      fill="#FF2E65"
    />
  </svg>
);

const LogotIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={Logo} {...props} />
);

const LogoSvg: React.FC = () => <LogotIcon />;

export default LogoSvg;
