import React from "react";
import { render } from "react-dom";
import { Searchbar } from "./searchbar";
import tickers from "./tickers.json"
import './styles.css'

function App() {
  return (
      <Searchbar suggestions={tickers}/>
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
          "AMATApplied Materials, Inc.",
          "TSLATesla, Inc.",
          "TSMTaiwan Semiconductor Manufacturing Company Limited"
        ]}
      />
    </div>
  );
}

render(<App />, document.getElementById('root'));
