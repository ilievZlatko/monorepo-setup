import React from "react";
import ReactDOM from "react-dom/client";

import { Text, Margin } from "@ds.e/react/lib";

import "@ds.e/scss/lib/Utilities.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/global.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div>
      <Margin>
        <Text size="base">This is some text</Text>
      </Margin>
    </div>
  </React.StrictMode>
);

// .dse-width-xs  .dse-width-lg
