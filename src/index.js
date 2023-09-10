import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Edit from "./Edit";
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
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
