import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
