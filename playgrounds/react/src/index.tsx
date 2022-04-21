import React from "react";
import ReactDOM from "react-dom/client";

import { Select } from "@ds.zlatko/react/lib";

import "@ds.zlatko/scss/lib/Utilities.css";
import "@ds.zlatko/scss/lib/Text.css";
import "@ds.zlatko/scss/lib/Margin.css";
import "@ds.zlatko/scss/lib/Select.css";
import "@ds.zlatko/scss/lib/global.css";

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
