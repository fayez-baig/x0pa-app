import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app-main";
import "carbon-components/css/carbon-components.min.css";
import ErrorBoundary from "./app/domains/Common/components/error-bondary/ErrorBoundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
