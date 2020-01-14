import ReactDOM from "react-dom";
import { customTemplateCertificate } from "../src/templates/sample";
import React from "react";
import { App } from "./app";

ReactDOM.render(
  <App
    documents={[
      { name: "Document Default", document: customTemplateCertificate },
      { name: "Document with foo", document: { ...customTemplateCertificate, foo: "bar" } }
    ]}
  />,
  document.getElementById("root")
);
