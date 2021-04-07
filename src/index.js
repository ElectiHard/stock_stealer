import React from "react";
import { render } from "react-dom";

import Autocomplete from "./autocomplete";

require("./styles.css");

function App() {
  return (
    <div>
      <h1>stock stealer thing</h1>
      <h2>type to see stocks</h2>
      <Autocomplete
        suggestions={[
          "ALI = F - Aluminium Futures, May-2021",
          "A - Agilent Technologies, Inc.",
          "AMCAMC - Entertainment Holdings, Inc",
          "AAPL - Apple Inc.",
          "AMZN - Amazon.com, Inc.",
          "PRIVATE - Ant Group",
        ]}
      />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
