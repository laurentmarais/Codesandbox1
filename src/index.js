import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid.js";

var _someData = [
  { Name: "Abc", Age: 15, Location: "Bangalore" },
  { Name: "Def", Age: 43, Location: "Mumbai" },
  { Name: "Uff", Age: 30, Location: "Chennai" },
  { Name: "Ammse", Age: 87, Location: "Delhi" },
  { Name: "Yysse", Age: 28, Location: "Hyderabad" }
];

ReactDOM.render(<Grid data={_someData} />, document.getElementById("root"));
