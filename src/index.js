import React from "react";
import { render } from "react-dom";
import { Searchbar } from "./searchbar";
import tickers from "./tickers.json"
import './styles.css'

function App() {
  return (
      <Searchbar suggestions={tickers}/>
  );
}

render(<App />, document.getElementById('root'));
