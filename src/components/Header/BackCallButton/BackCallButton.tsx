import React, { Children, FC, useState } from "react";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./backcallBtn.scss";
import type { SizeType } from "antd/es/config-provider/SizeContext";

const BackCallButton: FC = () => {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <>
      <Button type="default" shape="round" size={size} className="call__btn">
        Заказать звонок
      </Button>
    </>
  );
};

export default BackCallButton;
