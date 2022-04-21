import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { Spacing } from "@dse.z/foundation";

import Color from "./Color";
import "@dse.z/scss/lib/Utilities.css";

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
