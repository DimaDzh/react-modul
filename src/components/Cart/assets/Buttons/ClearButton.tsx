import React from "react";
import { Button } from "antd";

type ClearButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
};

const ClearButton: React.FC<ClearButtonProps> = (props) => {
  return (
    <div>
      <Button onClick={() => props.handleClick()} danger>
        <span>{props.children}</span>
      </Button>
    </div>
  );
};

export default ClearButton;
