import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/app";

/* import { createBrowserHistory } from "history";
import { Router } from "react-router";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
); */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);