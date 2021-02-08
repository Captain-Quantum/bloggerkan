import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from "./App";
import "./App.css";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorkerRegistration.register();