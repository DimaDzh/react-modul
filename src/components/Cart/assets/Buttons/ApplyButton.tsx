import React from "react";
import { custBtn } from "../../../variables/mainColors/custBtn";

type ApplyButtonProps = {
  children: React.ReactNode;
  clickEvent?: () => void;
};

const ApplyButton: React.FC<ApplyButtonProps> = (props) => {
  return (
    <div>
      <button
        style={custBtn}
        className="{styles.root}"
        type="submit"
        onClick={() => props.clickEvent && props.clickEvent()}
      >
        <span>{props.children}</span>
      </button>
    </div>
  );
};

export default ApplyButton;
