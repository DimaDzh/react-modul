import React, { FC } from "react";
import { Button } from "antd";
import { BaseButtonProps } from "antd/lib/button/button";

interface ICustomButtnProps extends BaseButtonProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}

const CustomButton: FC<ICustomButtnProps> = ({
  children,
  type,
  shape,
  styles,
}) => (
  <>
    <Button type={type} shape={shape} style={styles}>
      {children}
    </Button>
  </>
);

export default CustomButton;
