import React from "react";
import { Spacing } from "@ds.e/foundation";

interface MarginProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  space = "xxxs",
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let classes: string = "";

  if (!left && !right && !top && !bottom) {
    classes = `dse-margin-${space}`;
  }

  if (left) {
    classes = `${classes} dse-margin-left-${space}`;
  }

  if (right) {
    classes = `${classes} dse-margin-right-${space}`;
  }

  if (top) {
    classes = `${classes} dse-margin-top-${space}`;
  }

  if (bottom) {
    classes = `${classes} dse-margin-bottom-${space}`;
  }

  return <div className={classes}>{children}</div>;
};

export default Margin;
