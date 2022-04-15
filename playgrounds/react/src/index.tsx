import React from "react";
import ReactDOM from "react-dom/client";

import { Text, Margin, Select } from "@ds.e/react/lib";

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
    <div>
      <Margin>
        <Text size="base">This is some text</Text>
      </Margin>

      <Select options={options} />
    </div>
  </React.StrictMode>
);
