import React from "react";
import { FontSize } from "@ds.zlatko/foundation";

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: keyof typeof FontSize;
}

const Text: React.FC<TextProps> = ({ size = FontSize.base, children }) => {
  const classes = `dse-text dse-text-${size}`;

  return <p className={classes}>{children}</p>;
};

export default Text;
