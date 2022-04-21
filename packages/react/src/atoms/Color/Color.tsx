import React from "react";
import { Spacing } from "@dse.z/foundation";

interface ColorProps {
  hexCode: string;
  width?: keyof typeof Spacing;
  height?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const classes = `dse-width-${width} dse-height-${height}`;

  return <div className={classes} style={{ backgroundColor: hexCode }}></div>;
};

export default Color;
