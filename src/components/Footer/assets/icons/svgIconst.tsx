import Icon, { HomeOutlined } from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { Space } from "antd";
import React from "react";
import FBIcon from "./image/FaceBookIcon";
import SkypeIcon from "./image/SkypeIcon";
import TelegramIcon from "./image/TelegramIcon";
import ViberIcon from "./image/ViberIcon";

const Iconed: React.FC = () => (
  <Space>
    <FBIcon />
    <ViberIcon />
    <SkypeIcon />
    <TelegramIcon />
  </Space>
);

export default Iconed;
