import React from "react";
import ReactDOM from "react-dom/client";

import { Select } from "@dse.z/react/lib";

import "@dse.z/scss/lib/Utilities.css";
import "@dse.z/scss/lib/Text.css";
import "@dse.z/scss/lib/Margin.css";
import "@dse.z/scss/lib/Select.css";
import "@dse.z/scss/lib/global.css";

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
