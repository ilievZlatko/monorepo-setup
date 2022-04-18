import React from "react";
import ReactDOM from "react-dom/client";

import { Select } from "@ds.e/react/lib";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/global.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "sweet-pink",
  },
];

root.render(
  <React.StrictMode>
    <div style={{ padding: "40px" }}>
      <Select
        options={options}
        renderOption={({ option, getOptionRecommendedProps }) => (
          <p {...getOptionRecommendedProps()}>{option.label}</p>
        )}
      />
    </div>
  </React.StrictMode>
);
