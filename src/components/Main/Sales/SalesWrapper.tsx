import React, { FC } from "react";
import { Typography, Button } from "antd";
import { mainColor1 } from "../../variables/mainColors/mainColor1";
import { custBtn } from "../../variables/mainColors/custBtn";
import SalesCard from "./SalesCard";

interface ISalesWrapperPorps {
  children?: React.ReactNode;
}

const { Title } = Typography;

const SalesWrapper: FC<ISalesWrapperPorps> = ({ children }) => {
  return (
    <div className="sales__section">
      {" "}
      <Title level={3}>
        Наши <span style={mainColor1}>акции</span>
      </Title>
      <SalesCard />
      <Button type="primary" style={custBtn}>
        All sales
      </Button>
    </div>
  );
};

export default SalesWrapper;
