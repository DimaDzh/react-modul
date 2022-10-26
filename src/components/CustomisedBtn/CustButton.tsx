import React, { FC } from "react";
import { Button } from "antd";
import { BaseButtonProps } from "antd/lib/button/button";

interface ICustomBtnProps extends BaseButtonProps {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const CustomButton: FC<ICustomBtnProps> = ({
  children,
  type,
  shape,
  styles,
  onClick,
}) => (
  <>
    <Button type={type} shape={shape} style={styles} onClick={onClick}>
      {children}
    </Button>
  </>
);

export default CustomButton;
