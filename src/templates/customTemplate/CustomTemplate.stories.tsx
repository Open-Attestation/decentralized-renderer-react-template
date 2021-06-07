import React, { FunctionComponent } from "react";
import { CustomTemplate } from "./customTemplate";
import { customTemplateCertificate } from "../samples";

export default {
  title: "templates/CustomTemplate",
  component: CustomTemplate,
  parameters: {
    componentSubtitle: "basic sample",
  },
};

export const Default: FunctionComponent = () => {
  return <CustomTemplate document={customTemplateCertificate} handleObfuscation={() => {}} />;
};
