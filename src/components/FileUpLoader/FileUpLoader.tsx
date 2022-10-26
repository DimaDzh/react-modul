import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";

type Props = {};

const FileUpLoader = (props: Props) => {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <div>
      <Button type="primary" icon={<DownloadOutlined />} size={size} />
    </div>
  );
};

export default FileUpLoader;
