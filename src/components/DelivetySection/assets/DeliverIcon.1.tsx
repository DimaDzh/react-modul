import React, { ReactNode } from "react";
import { JsxElement } from "typescript";

interface DeliverIconProps {
  children?: ReactNode | JSX.Element;
  styles: React.CSSProperties;
}

export function DeliverIcon({
  styles,
  children,
}: DeliverIconProps): JSX.Element {
  return <div className="deliv-icon">{children}</div>;
}
