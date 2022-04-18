import React from "react";
import Select from "./Select";

// CSS
import "@ds.e/scss/lib/Select.css";

export default {
  title: "Select",
};

const options = [
  {
    label: "Strict Black",
    value: "black",
  },
  {
    label: "Heavenly Green",
    value: "green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

export const Common = () => <Select options={options} />;
