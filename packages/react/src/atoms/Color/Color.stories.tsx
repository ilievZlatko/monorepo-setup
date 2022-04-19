import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { Spacing } from "@ds.e/foundation";

import Color from "./Color";
import "@ds.e/scss/lib/Utilities.css";

export default {
  title: "Atoms/Color",
};

export const Common = () => <Color hexCode={text("HexCode", "pink")} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Wicth", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);
